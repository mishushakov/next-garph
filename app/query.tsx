'use client';

import { userQuery } from './../queries/userQuery'
import { useTransactionQuery } from './../utils/client'

export default function Example() {
  const { data, error, isLoading } = useTransactionQuery(userQuery)

  if (isLoading) return <div>Loading...</div>
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
