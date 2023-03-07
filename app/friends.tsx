'use client';

import { useState } from 'react'
import { useQuery, useMutation, query } from './../utils/client'

export default function Example() {
  const query = useQuery()
  const user = query.user

  return (
    <ul>
      { user.friends.map((friend) => <li key={Math.random() * 3}>{friend.name}, {friend.age} <br />
      Friends you have in common: { friend.friends.map((f) => f.name).join(', ') }</li>) }
    </ul>
  )
}
