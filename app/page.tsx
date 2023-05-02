import Query from "./query";
import QueryServer from "./query_server";
import Mutation from "./mutation";

export default function Example() {
  return (
    <>
      <h1>Query</h1>
      <Query />

      <h1>Mutation</h1>
      <Mutation />
    </>
  );
}
