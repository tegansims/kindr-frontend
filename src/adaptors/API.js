const baseUrl = 'http://localhost:3000/'

const namesUrl = baseUrl + 'names'
const nameUrl = baseUrl + 'names/create'
const randomNameUrl = baseUrl + 'random'

const get = url => 
    fetch(url, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
}).then(resp => resp.json())

const post = (url, data) => 
fetch(url, {
    method: 'POST', 
    headers:  { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: localStorage.getItem('token') 
    },
    body: JSON.stringify( data )
}).then(resp => resp.json())


const names = () => get(namesUrl)
const randomName = () => get(randomNameUrl)


export default { names, randomName }