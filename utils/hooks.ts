import { useState } from 'react'
import { resolved } from './../utils/client'
import { useEffect } from 'react'

export function useQuery <T> (query: () => T) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    resolved(query)
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  })

  return { data, loading, error }
}
