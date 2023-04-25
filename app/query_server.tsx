'use server';

import { userQuery } from './../queries/userQuery'
import { resolved } from './../utils/client'

export default async function Example() {
  const data = await resolved(userQuery)

  return (
    <>
      <p>User: {data?.name}</p>
    </>
  )
}
