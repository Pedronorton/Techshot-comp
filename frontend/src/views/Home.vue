<template>
  <div class="home">
    <b-button v-b-modal.modal-add class="option-button" variant="success">Adicionar</b-button>
    <b-modal id="modal-add" title="BootstrapVue" @ok="addField()">
      <div class="input">
        <b-form-input v-model="addItem.nome" placeholder="Nome"></b-form-input>
      </div>
      <div class="input">
        <b-form-input v-model="addItem.idade" placeholder="Idade"></b-form-input>
      </div>
      <div class="input">
        <b-form-input v-model="addItem.curso" placeholder="Curso"></b-form-input>
      </div>
      <div class="input">
        <b-form-input v-model="addItem.instituicao" placeholder="Instituicao"></b-form-input>
      </div>
      <div>
        <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
      </div>

    </b-modal>


    <div>
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(opcoes)=row >
          <b-button @click="row.toggleDetails" class="option-button" variant="primary">Editar</b-button>
          <b-button @click="deleteField(row)" class="option-button" variant="danger">Deletar</b-button>
        </template>
        <template #row-details="row" >
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Nome:</b></b-col>
              <b-col><b-form-input v-model="row.item.nome" disabled></b-form-input></b-col>
            </b-row>
           <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Idade:</b></b-col>
              <b-col><b-form-input v-model="row.item.idade" disabled></b-form-input></b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Curso:</b></b-col>
              <b-col><b-form-input v-model="row.item.curso" placeholder="Edite o curso"></b-form-input></b-col>
            </b-row>

            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Instituição:</b></b-col>
              <b-col><b-form-input v-model="row.item.instituicao" placeholder="Edite a instituição"></b-form-input></b-col>
            </b-row>
            <b-button size="sm" @click="row.toggleDetails, editField(row)"  variant="success">Ok</b-button>
          </b-card>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import dataService from '../service/DataService.js'
import axios from 'axios'
export default {
  name: "Home",
  data(){
    return {
      selected: null,
      options: [],
      fields: ["id", "nome", "idade", "curso", "instituicao","estado", "opcoes"],
      items: [],
      addItem : {
        nome: "",
        idade: "",
        curso: "",
        instituicao: "",
        estado: "",
      },
      
    }
  },
  async mounted(){
    try{
      const response = await dataService.getAll()
      response.data.forEach(element => {
        this.items.push(element)
      });
    }catch(e){
      alert(e)
    }
    try{
      const responseStates = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      responseStates.data.forEach(state => {
        // const temp = {
        //   text: state.nome,
        //   value: state
        // }
        this.options.push(state.nome)
      })
    }catch(e){
      alert(e)
    }
  },
  methods: {
        async addField(){
          console.log(this.selected);
          const temp = {
            nome: this.addItem.nome,
            idade: this.addItem.idade,
            curso: this.addItem.curso,
            instituicao: this.addItem.instituicao,
            estado: this.selected
          }
          try{
            await dataService.insert(temp)
            this.items.push(temp)

          }catch(e){
            alert(e)
          }
          
        },
        async deleteField(row){
          let index = this.items.indexOf(row.item)
          if(confirm("Tem certeza que deseja deletar ?")){
            try{
              await dataService.deleteItem(index)
              this.items.splice(index, 1)
            }catch(e){
              alert(e)
            }
          }
        },
        async editField(row){
          let index = this.items.indexOf(row.item)
          alert(index)
          const temp = {
            id: row.item.id,
            nome: row.item.nome,
            idade: row.item.idade,
            curso: row.item.curso,
            instituicao: row.item.instituicao,
          }
          try{
            await dataService.editItem(index, temp)
            this.items.splice(index, 1, temp)
          }catch(e){
            alert(e)
          }
        }
      }
  
};
</script>


<style>
.input{
  margin-top: 10px;
}

.option-button{
  margin: 10px;
}

</style>
