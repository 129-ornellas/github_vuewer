<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <h2>Repositório</h2>
    <GithubContent :repo="repo"/>
    <h2>Issues</h2>
    <GithubIssues :repo="repo"/>
  </v-container>
</template>
  
<script>
  import GithubRepo from './GithubRepo';
  import GithubIssues from './GithubIssues';
  import GithubContent from './GithubContent';
  export default {
    components: {
    GithubRepo,
    GithubIssues,
    GithubContent
},
    data: () => ({
      repo: null
    }),
    methods: {
      onRepoSelected(repo){
        this.repo = repo
      }
    }
  }
</script>
