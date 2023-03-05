'use client';

import { useState } from 'react';
import { useQuery, useMutation, query } from './../utils/client'

export default function Example() {
  const [name, setName] = useState('Mish')
  const [greet, { isLoading, data, error }] = useMutation(
    (mutation, args: { name: string }) => {
      const result = mutation.greet({ name: args.name })
      return result
    },
    {
      onCompleted(data) { },
      onError(error) { },
      // refetchQueries: [query.greet({ name: 'Mish' })],
      // awaitRefetchQueries: true,
      suspense: false,
    }
  )

  return (
    <>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => greet({ args: { name } }).then(a => alert(a))}>Greet</button>
    </>
  )
}
