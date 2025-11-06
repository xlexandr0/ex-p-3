import React from 'react'

export default function EntityCard({ entity }) {
  return (
    <div className="card h-100">
      {entity.image && (
        <img
          src={entity.image}
          className="card-img-top"
          alt={entity.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{entity.name}</h5>
        <p className="card-text"><strong>Race:</strong> {entity.race || '—'}</p>
        <p className="card-text"><strong>Origin:</strong> {entity.origin || entity.planet || '—'}</p>
        <p className="card-text"><strong>Affiliation:</strong> {entity.affiliation || '—'}</p>
      </div>
    </div>
  )
}
