import Query from './query'
import Friends from './friends'
import Mutation from './mutation'

export default function Example() {
  return (
    <>
      <h1>Query</h1>

      {/* @ts-expect-error Server Component */}
      <Query />

      <h1>Mutation</h1>
      <Mutation />

      <h1>Friends</h1>
      <Friends />
    </>
  )
}
