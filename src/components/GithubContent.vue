<template>
    <div>
      <v-row>
        <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Arquivo/Pasta</th>
                    <th class="text-left">Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="content in contents" :key="content.number">
                    <td>{{ content.name }}</td>
                    <td v-if="content.type == 'dir'"><v-btn @click="abreDir(content)">abra</v-btn></td>
                  </tr>
                </tbody>
              </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-progress-circular indeterminate color="primary" v-if="loading"></v-progress-circular>
          <v-btn color="primary" v-if="temmais" @click="listaContent">MAIS</v-btn>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  
    import {api} from '~api'
  
    export default {
      props: ['repo'],
      data: () => ({
        contents: [],
        diretorio: '',
        loading: false,
        temmais: false,
        currentPage: 1,
      }),
      methods: {
        async listaContent(){
          this.loading = true
          this.contents = await api.listaContent(this.repo.owner.login, this.repo.name)
          this.loading = false
        },
        async abreDir(content){
            this.loading = true
            this.diretorio = await api.abreDir(this.repo.owner.login, this.repo.name, content.name)
            this.loading = false
            this.contents = []
            this.contests.push('21','45')
        }
      },
      watch: {
        repo(){
          this.content = []
          if (this.repo) {
            this.temmais = false
            this.currentPage = 1
            this.listaContent()
          } else {
            this.content = []
            this.temmais = false
            this.currentPage = 1
          }
        }
      }
    }
  </script>
  