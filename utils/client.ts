import { createClient, InferClient } from '@garph/gqty'
import { g, queryType, mutationType } from '../pages/api/graphql'

type ClientTypes = InferClient<{ query: typeof queryType, mutation: typeof mutationType }>

export const { useQuery, useMutation, query } = createClient<ClientTypes>({
  schema: g,
  url: 'http://localhost:3000/api/graphql',
  defaults: {
    suspense: false
  }
})
