const baseUrl = 'http://localhost:3000/'

const namesUrl = baseUrl + 'names'


const get = url => 
    fetch(url, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
}).then(resp => resp.json())


const names = () => get(namesUrl)


export default { names}