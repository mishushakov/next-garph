import { GarphSchema, InferResolvers, buildSchema } from "garph"

const g = new GarphSchema()

const User = g.type('User', {
  id: g.float(),
  name: g.string(),
  age: g.int(),
  friends: g.ref(() => User).list()
})

export const queryType = g.type('Query', {
  greet: g.string()
    .args({
      name: g.string().optional().default('Max'),
    })
    .description('Greets a person'),
  user: g.ref(() => User)
})

export const mutationType = g.type('Mutation', {
  greet: g.string()
    .args({
      name: g.string().optional().default('Max'),
    })
    .description('Greets a person')
})

export const subscriptionType = g.type('Subscription', {
  counter: g.int()
})

const resolvers: InferResolvers<{ Query: typeof queryType, Mutation: typeof mutationType, Subscription: typeof subscriptionType, User: typeof User }, {}> = {
  Query: {
    greet: (parent, args, context, info) => `Hello, ${args.name}`,
    user: (parent, args, context, info) => {
      return {} as any
    }
  },
  Mutation: {
    greet: (parent, args, context, info) => `Hello, ${args.name}`
  },
  Subscription: {
    counter: {
      subscribe: async function* (parent, args, context, info) {
        for (let i = 1; i <= 100; i++) {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          yield { counter: i }
        }
      }
    }
  },
  User: {
    id: () => Math.random() * 3,
    name: () => 'Max',
    age: () =>  20,
    friends: () => [{
      id: 1,
      name: 'Max',
      age: 20,
    },
    {
      id: 2,
      name: 'Max',
      age: 20,
    },
    {
      id: 3,
      name: 'Max',
      age: 20,
    }] as any
  }
}

export const schema = buildSchema({ g, resolvers })
