<template>
  <div id="app" class="container">
    <AppHeader />
    <AppContent />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import AppContent from './AppContent.vue'

export default {
  name: 'app',
  components: {
    AppHeader, AppFooter, AppContent
  },
  data() { return {
    title: 'Gestion Graphique de BLIH',
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
  computed: {
    activeRepo: function() {
      return this.repos[this.checked]
    },
    login: function() {
      return storageService.get('login');
    }
  },
  methods: {
    getRepoList: function() {
      // request.get()
      console.log('getRepoList()');
    }
  }
}
</script>

<style lang="scss">

#app {
  background-color: lightgrey;
  padding: 10px;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  padding-top: 60px;
  padding-bottom: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
