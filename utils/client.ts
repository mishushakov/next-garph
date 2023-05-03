import { InferClient } from 'garph/dist/client'
import { createClient } from '@garph/gqty'
import { g, queryType, mutationType, subscriptionType } from '../pages/api/[...graphql]'

type ClientTypes = InferClient<{ query: typeof queryType, mutation: typeof mutationType, subscription: typeof subscriptionType }>

export const { useQuery, useMutation, query, mutation, resolved, inlineResolved, useTransactionQuery, useSubscription } = createClient<ClientTypes>({
  schema: g,
  url: process.env.NODE_ENV === 'production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql` : 'http://localhost:3001/api/graphql',
  defaults: {
    suspense: false
  }
})
