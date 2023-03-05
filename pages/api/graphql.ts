import { GarphSchema, InferResolvers, Infer, buildSchema } from "garph"
import { createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'

export const g = new GarphSchema()

export const queryType = g.type('Query', {
  greet: g.string()
    .args({
      name: g.string().optional().default('Max'),
    })
    .description('Greets a person')
})

export const mutationType = g.type('Mutation', {
  greet: g.string()
    .args({
      name: g.string().optional().default('Max'),
    })
    .description('Greets a person')
})

type x = Infer<typeof mutationType>

const resolvers: InferResolvers<{ Query: typeof queryType, Mutation: typeof mutationType  }, {}> = {
  Query: {
    greet: (parent, args, context, info) => `Hello, ${args.name}`
  },
  Mutation: {
    greet: (parent, args, context, info) => `Hello, ${args.name}`
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
