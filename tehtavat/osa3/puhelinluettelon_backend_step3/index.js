// import React, { Component } from 'react';
// import { Text, View } from "react-native";

const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

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