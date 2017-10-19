import React, { Component } from 'react'
import Repository from './Repository'
import RepositoryList from './RepositoryList'

class Repositories extends Component {
  constructor() {
    super()
    this.repos = [
      {UUID : '4b584d85-cd54-f45a-455d-ddb5ad422d42',
       name: 'my_repo_1',
       public: false,
       creationDate: 'Lundi 9 Mai 2016 18:26:31',
       description: 'my_description_1'},
      {UUID : 'abcdef01-cd54-f45a-455d-ddb5ad422d42',
       name: 'my_repo_2',
       public: false,
       creationDate: 'Lundi 9 Mai 2016 18:26:31',
       description: 'my_description_2'}
    ]
  }
  render() {
    return (
      <div className="row">
        <label>Repositories</label>
        <RepositoryList repos={this.repos}/>
       { this.repos
      ? this.repos.map(repo => (
        <Repository repo={repo} />
      ))
      : <div>Loading...</div>}
      </div>
    )
  }
}

export default Repositories
