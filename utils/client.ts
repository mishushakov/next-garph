import { InferClient } from 'garph/dist/client'
import { createClient } from '@garph/gqty'
import { g, queryType, mutationType } from '../pages/api/graphql'

type ClientTypes = InferClient<{ query: typeof queryType, mutation: typeof mutationType }>

export const { useQuery, useMutation, query, mutation, resolved } = createClient<ClientTypes>({
  schema: g,
  url: process.env.NODE_ENV === 'production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql` : 'http://localhost:3000/api/graphql',
  defaults: {
    suspense: false
  }
})
