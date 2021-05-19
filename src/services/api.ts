import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.107:3333'
})

// baseURL: 'http://192.168.1.4:3333' - usado na aula
// usar o endereço ip da própria máquina

export default api