import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    /*
    Simuloi tilannetta, jossa muistiinpanojen poistaminen
    sallittaisiin järjestelmästä. Tällöin voisi syntyä
    tilanne, jossa käyttäjä yrittää muuttaa tärkeyttä sellaisessa
    muistiinpanossa, joka on jo poistettu järjestelmästä.

    Tässä tilanne saadaan aikaan kovakoodaamalla getAll-funktioon
    muistiinpano, jota ei todellisuudessa palvelimella ole olemassa.
    */
   const nonExisting = {
       id: 10000,
       content: 'This note is not saved to server',
       date: '2019-05-30T17:30:31.098Z',
       important: true,
   }
   return request.then(response => response.data.concat(nonExisting))
   //return request.then(response => response.data)
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