import { resolved, query } from './../utils/client'

export default async function Example() {
  const data = await resolved(() => {
    const name = query.greet({ name: 'Max' })
    return {
      name
    }
  })

  return <p>{ data.name }</p>
}
