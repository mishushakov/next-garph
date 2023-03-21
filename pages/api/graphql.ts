import { GarphSchema, InferResolvers, Infer, InferArgs, buildSchema } from "garph"
import { createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'

export const g = new GarphSchema()

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

type x = Infer<typeof queryType>

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

export const config = {
  runtime: 'edge'
}

// Next.JS + Yoga API
const yoga = createYoga({
  schema: buildSchema({ g, resolvers }),
  graphqlEndpoint: '/api/graphql'
})

export default yoga.handleNodeRequest
