<template>
  <v-container>
    <GithubRepo @reposelected="onRepoSelected"/>
    <GithubContent :repo="repo"/>
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
