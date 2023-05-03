import { InferClient } from 'garph/dist/client'
import { createClient } from '@garph/gqty'
import { schema } from '../pages/api/[...graphql]'
import type { queryType, mutationType, subscriptionType } from '../pages/api/[...graphql]'

type ClientTypes = InferClient<{ query: typeof queryType, mutation: typeof mutationType, subscription: typeof subscriptionType }>

export const { useQuery, useMutation, query, mutation, resolved, inlineResolved, useTransactionQuery, useSubscription } = createClient<ClientTypes>({
  schema,
  url: process.env.NODE_ENV === 'production' ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql` : 'http://localhost:3000/api/graphql',
  defaults: {
    suspense: false
  }
})
