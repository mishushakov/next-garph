import { GarphSchema, InferResolvers, Infer, buildSchema } from "garph";
import { createYoga } from "graphql-yoga";

export const g = new GarphSchema();

export const queryType = g.type("Query", {
  greet: g
    .string()
    .args({
      name: g.string().optional().default("Max"),
    })
    .description("Greets a person"),
});

export const mutationType = g.type("Mutation", {
  greet: g
    .string()
    .args({
      name: g.string().optional().default("Max"),
    })
    .description("Greets a person"),
});

type x = Infer<typeof queryType>;

const resolvers: InferResolvers<
  { Query: typeof queryType; Mutation: typeof mutationType },
  {}
> = {
  Query: {
    greet: (parent, args, context, info) => `Hello, ${args.name}`,
  },
  Mutation: {
    greet: (parent, args, context, info) => `Hello, ${args.name}`,
  },
};

export const schema = buildSchema({ g, resolvers });

// Next.JS + Yoga API
export default createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
});
