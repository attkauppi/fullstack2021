import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

// Koska olioiden kenttien nimet ovat samat kuin niiden arvon
// määrittelevien muuttujien nimet, voidaan seuraava
// export default {
//     getAll: getAll,
//     create: create,
//     update: update
// }

// ==> Kirjoittaa myös näin:
export default {
    getAll,
    create,
    update
}