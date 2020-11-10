
import data from '../util/data.js'

class UserController{

    getAll(request, response){
        return response.json({msg: "rota de getAll", status: 200})
    }

    insert(request, response){
        return response.json({msg: "rota de insert", status: 200})

    }

    deleteUser(request, response){
        return response.json({msg: "rota de delete", status: 200})

    }

    edit(request, response){
        return response.json({msg: "rota de edit", status: 200})

    }

}

export default UserController