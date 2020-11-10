<template>
  <div class="home">
    <b-button v-b-modal.modal-add class="option-button" variant="success">Adicionar</b-button>
    <b-modal id="modal-add" title="BootstrapVue" @ok="null">
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

    </b-modal>


    <div>
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(opcoes)=row >
          <b-button @click="row.toggleDetails" class="option-button" variant="primary">Editar</b-button>
          <b-button @click="null" class="option-button" variant="danger">Deletar</b-button>
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
            <b-button size="sm" @click="row.toggleDetails, null"  variant="success">Ok</b-button>
          </b-card>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "Home",
  data(){
    return {
      fields: ["id", "nome", "idade", "curso", "instituicao", "opcoes"],
      items: [
          {id: 1, nome: "Pedro", idade: 22, curso: "Ciência da Computação", instituicao: "UFLA"},
          {id: 2, nome: "Bianca", idade: 22, curso: "Ciência da Computação", instituicao: "UNIFEI"},
          {id: 3, nome: "Julia", idade: 25, curso: "Nutrição", instituicao: "UVF"},
          {id: 4, nome: "José", idade: 30, curso: "Agronomia", instituicao: "UFBA"},
          {id: 5, nome: "Vitória", idade: 18, curso: "Medicina", instituicao: "UNB"},
        ],
      addItem : {
        nome: "",
        idade: "",
        curso: "",
        instituicao: "",
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
