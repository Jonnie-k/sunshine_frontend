import { useState, useEffect } from 'react'
import { getCourses } from '../services/courses'

export function useCourses(params) {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    setLoading(true)
    getCourses(params)
      .then(res => setCourses(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)])

  return { courses, loading, error, setCourses }
}