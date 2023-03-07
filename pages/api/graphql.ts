import { GarphSchema, InferResolvers, Infer, buildSchema } from "garph"
import { createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'

export const g = new GarphSchema()

const User = g.type('User', {
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

type x = Infer<typeof mutationType>

const resolvers: InferResolvers<{ Query: typeof queryType, Mutation: typeof mutationType, User: typeof User }, {}> = {
  Query: {
    greet: (parent, args, context, info) => `Hello, ${args.name}`,
    user: (parent, args, context, info) => {
      return {} as any
    }
  },
  Mutation: {
    greet: (parent, args, context, info) => `Hello, ${args.name}`
  },
  User: {
    name: () => 'Max',
    age: () =>  20,
    friends: () => [{
      name: 'Max',
      age: 20,
    },
    {
      name: 'Max',
      age: 20,
    },
    {
      name: 'Max',
      age: 20,
    }] as any
  }
}

// Next.JS + Yoga API
export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: buildSchema({ g, resolvers }),
  graphqlEndpoint: '/api/graphql'
})
