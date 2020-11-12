
import data from '../util/data.js'

class UserController{

    getAll(request, response){
        return response.json(data)
    }

    insert(request, response){
        console.log(request.body);
        const {nome, idade, curso, instituicao} = request.body
        const temp = {nome, idade, curso, instituicao}
        data.push(temp)
        return response.json(data)

    }

    deleteUser(request, response){
        const { index } = request.params
        data.splice(index, 1)
        return response.json(data)

    }

    edit(request, response){
        const {nome, idade, curso, instituicao} = request.body
        
        const {id} = request.params 
        const temp = {nome, idade, curso, instituicao}

        data.splice(id, 1, temp)
        return response.json(data)
    }

}

export default UserController