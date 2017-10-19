<template>
  <div class="row app-content"><!-- AppContent -->
    <div class="col"><!-- Repositories -->
      <div class="row">
        <label>Repositories</label>
      </div>
      <div class="row">
        <div class="col col-md-3"><!-- RepoList -->
          <div class="row" v-for="(repo, i) of repos"><!-- for repo in repos -->
            <input type="radio" :id="'repo' + i" name="group" :value="i" v-model="checked" />
            <label :for="'repo' + i" class="repo-name">{{ repo.name }}</label>
          </div>
        </div>
        <div class="content col col-md-9" v-if="checked !== ''"><!-- Repository -->
          <div class="row">UUID: {{ activeRepo.UUID }}</div>
          <div class="row">public: {{ activeRepo.public }}</div>
          <div class="row">Creation Date: {{ activeRepo.creationDate }}</div>
          <div class="row">Description: {{ activeRepo.description }}</div>
          <div class="row"><!-- RepoRights -->
            <span>Rights</span>
            <ul>
              <li>someone: rw</li>
              <li>someother: r</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { return {
    repos: [
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
    ],
    checked: ''
  }},
  computed() {return {
    activeRepo: function() {
      return this.repos[this.checked]
    }
  }}
}
</script>

<style lang="scss">
</style>
