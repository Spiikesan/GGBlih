<template>
  <div class="row header"><!-- AppHeader -->
    <div class="col col-md-2 navbox text-center"><!-- NavBox -->
      <div class="row text-center">{{ login }}</div>
      <div class="row btn-group-vertical">
        <!-- if route.path != activeRoute.path -->
        <span class="btn btn-info"><a href="#" @click="getRepoList">route1</a></span>
        <span class="btn btn-info"><a href="#">route2</a></span>
      </div>
    </div>
    <div class="col col-md-7 title"><!-- MainTitle -->
      <h1>{{ title }}</h1>
    </div>
    <div class="col col-md-3 text-center"><!-- LangSelect -->
      <div class="btn-group">
        <button type="button" class="btn btn-primary">English</button>
        <button type="button" class="btn btn-primary">Français</button>
      </div>
    </div>
  </div>
</template>

<script>
const storageService = {
  get: (key) => {
    if (!key)
      return null
    return JSON.parse(sessionStorage.getItem(key))
  },
  set: (obj, key) => {
    if (!key)
      return
    sessionStorage.setItem(key, JSON.stringify(obj))
  }
}
export default {
  data () {
    return {
      title: 'Gestion Graphique de BLIH'
    }
  },
  computed: {
    login: function() {
      return storageService.get('login');
    }
  },
  methods: {
    getRepoList: function() {
      request.get()
    }
  }
}
</script>

<style lang="scss">

</style>
