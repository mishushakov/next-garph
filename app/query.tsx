'use client';

import { userQuery } from './../queries/userQuery'
import { useQuery } from './../utils/hooks'

export default function Example() {
  const { data, loading, error } = useQuery(userQuery)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <p>User: {data?.name}</p>
      <p>Friends:</p>
      <ul>{ data?.friends.map(friend => {
        return <li key={friend.id}>{ friend.name }, { friend.age }</li>
      }) }
      </ul>
    </>
  )
}
