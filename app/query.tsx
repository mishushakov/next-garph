'use client';

import { useQuery } from './../utils/client'

export default function Example() {
  const query = useQuery()
  return <p>{ query.greet({ name: 'Mish' }) }</p>
}
