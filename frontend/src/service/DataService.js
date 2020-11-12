import Api from './Api.js'


const getAll = () =>{
    return Api().get()
}

const insert = (dado) =>{
    return Api().post('/', dado)
}

const deleteItem = (id) =>{
    return Api().post(`/delete/${id}`)
}

const editItem = (id, data) =>{
    return Api().put(`/${id}`, data)
}

export default {
    getAll,
    insert,
    deleteItem,
    editItem

}