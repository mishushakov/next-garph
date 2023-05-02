'use client';

import { useQuery } from '../utils/client'

export default function Example() {
  const query = useQuery()

  return (
    <>
      <p>User: {query.user?.name}</p>
      <p>Friends:</p>
      <ul>{ query.user?.friends.map(friend => {
        return <li key={friend.id ?? 0}>{ friend.name }, { friend.age }</li>
      }) }
      </ul>
    </>
  )
}
