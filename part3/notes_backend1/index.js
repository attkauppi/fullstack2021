// Web-palvelin sovellus esimerkki - käyttäen expressiä http:n sijasta

const { response } = require('express')
const express = require('express')
const app = express()
// Use express json parser
app.use(express.json())

// Raw data for the server to consume.
let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-01-10T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-01-10T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-01-10T19:20:14.298Z",
      important: true
    }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)
  // const note = notes.find(note => {
  //   console.log(note.id, typeof note.id, id, typeof id, note.id === id)
  //   return note.id === id
  // })

  // Handle non-existing ids by returning 404 error
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }

  console.log(note)
})

// Delete content
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  // When deletion successful, return status code 204
  // which means "no content". An alternative would be
  // to return 404.
  response.status(204).end()
})

// Generates id
const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

// Add notes
app.post('/api/notes', (request, response) => {
  const body = request.body

  // ensure content isn't empty. If it is, return 400 bad request
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId()
  }

  notes = notes.concat(note)
  console.log(note)
  response.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})