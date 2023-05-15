/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  Float: true,
  Int: true,
  String: true,
};
export const generatedSchema = {
  User: {
    __typename: { __type: "String!" },
    age: { __type: "Int!" },
    friends: { __type: "[User!]!" },
    id: { __type: "Float!" },
    name: { __type: "String!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    greet: { __type: "String!", __args: { name: "String" } },
  },
  query: {
    __typename: { __type: "String!" },
    greet: { __type: "String!", __args: { name: "String" } },
    user: { __type: "User!" },
  },
  subscription: {
    __typename: { __type: "String!" },
    counter: { __type: "Int!" },
  },
} as const;

export interface User {
  __typename?: "User";
  age: ScalarsEnums["Int"];
  friends: Array<User>;
  id: ScalarsEnums["Float"];
  name: ScalarsEnums["String"];
}

export interface Mutation {
  __typename?: "Mutation";
  /**
   * Greets a person
   */
  greet: (args?: {
    /**
     * @defaultValue `"Max"`
     */
    name?: Maybe<Scalars["String"]>;
  }) => ScalarsEnums["String"];
}

export interface Query {
  __typename?: "Query";
  /**
   * Greets a person
   */
  greet: (args?: {
    /**
     * @defaultValue `"Max"`
     */
    name?: Maybe<Scalars["String"]>;
  }) => ScalarsEnums["String"];
  user: User;
}

export interface Subscription {
  __typename?: "Subscription";
  counter: ScalarsEnums["Int"];
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
