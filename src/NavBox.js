import React from 'react'

function NavBox({ login }) {
  return (
    <div className="col col-md-2">
      <div className="row">
        <span>{login}</span>
      </div>
      <div className="row btn-group-vertical">
        <span className="btn btn-info"><a href="">route1</a></span>
        <span className="btn btn-info"><a href="">route2</a></span>
      </div>
    </div>
  )
}

export default NavBox
