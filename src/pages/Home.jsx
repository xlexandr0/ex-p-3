import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { getCharacters } from '../api/dbApi'
import EntityCard from '../components/EntityCard'

export default function Home() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    getCharacters(6)
      .then(res => {
        const data = res.data?.results || res.data || []
        setCharacters(data)
      })
      .catch(err => setError(err.message || 'Error'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <Hero />
      <h2>Personajes (muestra rápida)</h2>

      {loading && <p>Cargando...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-3">
        {characters.map((c) => (
          <div key={c.id || c.name} className="col-sm-6 col-md-4">
            <EntityCard entity={c} />
          </div>
        ))}
      </div>
    </div>
  )
}
