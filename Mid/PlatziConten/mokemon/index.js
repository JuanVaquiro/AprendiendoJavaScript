// const express = require('express') //import
import express from 'express'
import cors from 'cors'

const app = express() // instaciar la app de express

app.use(cors())
app.use(express.json())

const players = []

class Player {
    constructor(id){
        this.id = id
    }
    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
    updatePosicion(x, y){
        this.x = x
        this.y = y
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }
}


app.get('/unirse', ( req, res ) => {  // cuando en la URL raiz reciba una penticion
    const id = `${Math.random()}`
    const player = new Player(id)
    players.push(player)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(id) 
 })

app.post("/mokepon/:playerId", ( req, res ) => {
    const playerId = req.params.playerId || "" 
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    const playerIndex = players.findIndex((jugador) => playerId === jugador.id)
    if (playerIndex >= 0) {
        players[playerIndex].asignarMokepon(mokepon)
    }
    
    console.log(players)
    console.log('ID',playerId)
    res.end()
})

app.post("/mokepon/:playerId/posicion", (req, res) => { 
    const playerId = req.params.playerId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0 
    const playerIndex = players.findIndex((jugador) => playerId === jugador.id )
    if (playerIndex >= 0) {
        players[playerIndex].updatePosicion(x, y)
    }
    
    const enemys = players.filter((jugador) =>  playerId !== jugador.id )

    res.send({ 
        enemys
     })
})

app.listen(8080, () => {
    console.log('servidor funcionando') // escuchar en el puerto, para responder
})