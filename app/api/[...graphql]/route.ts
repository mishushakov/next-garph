import { schema } from './schema'
import { createYoga } from 'graphql-yoga'
import { useGraphQLSSE } from '@graphql-yoga/plugin-graphql-sse'

export const runtime = 'edge'

// Next.JS + Yoga API
const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
  graphiql: {
    subscriptionsProtocol: 'GRAPHQL_SSE'
  },
  plugins: [
    useGraphQLSSE()
  ]
})

export { handleRequest as GET, handleRequest as POST }
