import QueryServer from './query_server'
import Mutation from './mutation'

export default function Example() {
  return (
    <>
      <h1>Query</h1>
      {/* @ts-expect-error Server Component */}
      <QueryServer />

      <h1>Query (Server)</h1>

      {/* @ts-expect-error Server Component */}
      <QueryServer />

      <h1>Mutation</h1>
      <Mutation />
    </>
  )
}
