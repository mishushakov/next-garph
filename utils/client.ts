import { InferClient } from "garph/dist/client";
import { createClient } from "@garph/gqty";
import { schema, queryType, mutationType } from "../pages/api/graphql";

type ClientTypes = InferClient<{
  query: typeof queryType;
  mutation: typeof mutationType;
}>;

export const {
  useQuery,
  useMutation,
  query,
  mutation,
  resolved,
  inlineResolved,
  useTransactionQuery,
} = createClient<ClientTypes>({
  schema,
  url: "https://b16ygf-3000.csb.app/api/graphql",
  defaults: {
    suspense: false,
  },
});
