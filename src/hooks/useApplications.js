import { useState, useEffect } from 'react'
import { getMyApplications, getAllApplications } from '../services/applications'

export function useMyApplications() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    getMyApplications()
      .then(res => setApplications(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { applications, loading, error }
}

export function useAllApplications() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  const refresh = () => {
    setLoading(true)
    getAllApplications()
      .then(res => setApplications(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => { refresh() }, [])

  return { applications, loading, error, refresh }
}