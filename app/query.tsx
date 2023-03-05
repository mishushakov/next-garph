'use client';

import { useState } from 'react'
import { useQuery, useMutation, query } from './../utils/client'

export default function Example() {
  const query = useQuery()
  return <p>{ query.greet({ name: 'Mish' }) }</p>
}
