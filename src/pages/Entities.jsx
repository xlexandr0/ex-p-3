import React, { useEffect, useState } from 'react'
import { getCharacters } from '../api/dbApi'

export default function Entities() {
  const [entities, setEntities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getCharacters(50)
      .then(res => {
        const data = res.data?.results || res.data || []
        setEntities(data)
      })
      .catch(err => setError(err.message || 'Error'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1>Entities</h1>

      {loading && <p>Cargando lista...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {entities.map(e => (
          <div key={e.id || e.name} className="col-md-6 mb-3">
            <div className="card p-3">
              <h5>{e.name}</h5>
              <p><strong>Raza:</strong> {e.race || '—'}</p>
              <p><strong>Planeta / Origen:</strong> {e.origin || e.planet || '—'}</p>
              <p><strong>Afilación:</strong> {e.affiliation || '—'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
