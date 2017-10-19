import React from 'react'

function Repository({ repo }) {
  return (
    <div className="row">
      <span id="content">Lorem iupsum dolor si amet</span>
      <p>
        <label>UUID: {repo.UUID || 'N/A'}</label><br />
        <label>public: {repo.public || 'N/A'}</label><br />
        <label>Creation Date: {repo.creationDate || 'N/A'}</label><br />
        <label>Description: {repo.description || 'N/A'}</label>
      </p>
    </div>
  )
}

export default Repository
