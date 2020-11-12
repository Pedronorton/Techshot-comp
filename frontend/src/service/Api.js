import Api from 'axios'

export default () => {
    return Api.create({
        baseURL: 'http://localhost:3333/'
    })
}