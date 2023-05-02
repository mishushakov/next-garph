import Query from './query'
import QueryServer from './query_server'
import Mutation from './mutation'
import Subscription from './subscription'

export default function Example() {
  return (
    <>
      <h1>Query</h1>
      <Query />

      <h1>Query (Server)</h1>

      {/* @ts-expect-error Server Component */}
      <QueryServer />

      <h1>Mutation</h1>
      <Mutation />

      <h1>Subscription</h1>
      <Subscription />
    </>
  )
}
