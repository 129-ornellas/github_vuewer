<template>
    <div>
      <v-row>
        <v-col cols="12">
            <h2 v-if="repo">{{ repo.name+'/' +contentAtual }}</h2>
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
                        <td v-if="content.type == 'dir'"><a @click="abreDir(content)" >{{ content.name }} </a></td>
                        <td v-else>{{ content.name }}</td>
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
      <v-btn v-if="novoContent.length > 0" class="mb-5" @click="voltarDir">
        Voltar
      </v-btn>
    </div>
  </template>
  
  <script>
  
    import {api} from '~api'
  
    export default {
      props: ['repo'],
      data: () => ({
        contents: [],
        loading: false,
        temmais: false,
        currentPage: 1,
        novoContent: [],
        contentAtual: '',
      }),
      methods: {
        async listaContent(){
          this.loading = true
          this.contents = await api.listaContent(this.repo.owner.login, this.repo.name)
          this.loading = false
        },
        async abreDir(content){
            let caminho = content.path
            this.loading = true
            this.contents = await api.abreDir(this.repo.owner.login, this.repo.name, caminho)
            this.novoContent.push(caminho)
            this.contentAtual = caminho
            this.loading = false
        },
        async voltarDir() {
            this.loading = true;
            this.novoContent.pop();
            let antigoContent =
                this.novoContent.length == 1 ? this.novoContent[0] : this.novoContent[-1];
            if (antigoContent == undefined)
                antigoContent = ''
            this.contents = await api.abreDir(
              this.repo.owner.login,
              this.repo.name,
              antigoContent
            );
            this.contentAtual = antigoContent
            this.loading = false;
        }       
      },
      watch: {
        repo(){
            this.novoContent = []
            this.listaContent()
          }
        }
      }
  </script>
<style>
.button {
    text-decoration: underline;
}
</style>