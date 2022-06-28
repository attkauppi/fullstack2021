const { res } = require('express')
const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('tiny'))
app.use(express.json())


let MAX = 10000

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-23"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

const lengthPersons = () => {
    return persons.length
}

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id == id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).json({
            error: "Not found"
        })
    }
    console.log(person)
})

const generateId = () => {
    return Math.floor(Math.random() * MAX)
}

app.post("/api/persons", (req, res) => {
    const body = req.body

    // Ensures body.content isn't empty. If it is, return 400
    // bad req
    if (!body.name || !body.number) {
        return res.status(400).json({
            error: "Name or body missing!"
        })
    }

    // If matching person found, return error
    const person_check = persons.filter(person => person.name === body.name)
    if (person_check) {
        return res.status(400).json({
            error: "Name must be unique!"
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    // Add to persons list
    persons = persons.concat(person)
    console.log(person)
    res.json(person)
})

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

app.get('/info', (req, res) => {
    const rep = lengthPersons()
    const date = new Date()
    rep_str = `Phonebook has info for ${rep} people <p>${date}`
    console.log(rep_str)
    res.send(rep_str)
    // res.send(
        // <Text>
        //     `Phonebook has info for ${rep} people \n ${date}`
        // </Text>
    // )
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})