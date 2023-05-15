/**
 * GQty: You can safely modify this file based on your needs.
 */

import { createReactClient } from "@gqty/react";
import { createClient as createSubscriptionsClient } from "graphql-ws";
import type { QueryFetcher } from "gqty";
import { Cache, createClient } from "gqty";
import type { GeneratedSchema } from "./schema.generated";
import { generatedSchema, scalarsEnumsHash } from "./schema.generated";

const queryFetcher: QueryFetcher = async function (
  { query, variables, operationName },
  fetchOptions
) {
  // Modify "/api/graphql" if needed
  const response = await fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
      operationName,
    }),
    mode: "cors",
    ...fetchOptions,
  });

  const json = await response.json();

  return json;
};

const subscriptionsClient =
  typeof window !== "undefined"
    ? createSubscriptionsClient({
        lazy: true,
        url: () => {
          // Modify if needed
          const url = new URL("/api/graphql", window.location.href);
          url.protocol = url.protocol.replace("http", "ws");
          return url.href;
        },
      })
    : undefined;

const cache = new Cache(
  undefined,
  /**
   * Default cache options immediate expiry with a 5 minutes window of
   * stale-while-revalidate.
   */
  {
    maxAge: 0,
    staleWhileRevalidate: 5 * 60 * 1000,
    normalization: true,
  }
);

export const client = createClient<GeneratedSchema>({
  schema: generatedSchema,
  scalars: scalarsEnumsHash,
  cache,
  fetchOptions: {
    fetcher: queryFetcher,
    subscriber: subscriptionsClient,
  },
});

// Core functions
const { resolve, subscribe, schema } = client;

// Legacy functions
const { query, mutation, mutate, subscription, resolved, refetch, track } =
  client;

const reactClient = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
  useSubscription,
} = reactClient;

export {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
  useSubscription,
};

export {
  resolve,
  subscribe,
  schema,
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
  track,
};
export * from "./schema.generated";
