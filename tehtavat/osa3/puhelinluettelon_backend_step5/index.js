// import React, { Component } from 'react';
// import { Text, View } from "react-native";

const { response } = require('express')
const express = require('express')
const app = express()
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

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id == id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).json({
            error: "Not found"
        })
    }
    console.log(person)
})

const generateId = () => {
    return Math.floor(Math.random() * MAX)
}

app.post("/api/persons", (request, response) => {
    const body = request.body

    // Ensures body.content isn't empty. If it is, return 400
    // bad request
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: "Name or body missing!"
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
    response.json(person)
})

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.get('/info', (request, response) => {
    const rep = lengthPersons()
    const date = new Date()
    rep_str = `Phonebook has info for ${rep} people <p>${date}`
    console.log(rep_str)
    response.send(rep_str)
    // response.send(
        // <Text>
        //     `Phonebook has info for ${rep} people \n ${date}`
        // </Text>
    // )
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})