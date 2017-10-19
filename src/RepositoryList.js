import React, { Component } from 'react'

class RepositoryList extends Component {
  constructor({ repos }) {
    super({ repos })
    this.repoDesc = repos
      ? repos.map(repo => (
        <div className="row">
          <label >{repo.name || 'N/A'}</label>
          <input type="radio" id="show" name="group" />
          <input type="radio" id="hide" name="group" checked />
          <label for="hide" className="hide">{repo.name || 'N/A'}</label>
          <label for="show" className="show">{repo.name || 'N/A'}</label>
        </div>
      ))
      : <div>Loading...</div>
  }
  render() {
    return (
      <div className="row">
        {this.repoDesc}
      </div>
    )
  }
}

export default RepositoryList
