'use server';

import { resolved, query } from './../utils/client'

export default async function Example() {
  const data = await resolved(() => {
    return query.greet({ name: 'Mish' })
  })

  return <p>{ data }</p>
}
