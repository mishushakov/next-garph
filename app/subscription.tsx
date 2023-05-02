'use client';

import { useSubscription } from './../utils/client'

export default function Example() {
  const { counter } = useSubscription()

  return (
    <>
      <p>Count: {counter}</p>
    </>
  )
}
