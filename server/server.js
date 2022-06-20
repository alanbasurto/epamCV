const express = require('express')
const fs = require('fs')
const app = express()
const cors = require("cors")

app.use(cors())

app.get("/",async (req,res) => {
    try {
        const dataString = await fs.promises.readFile("./data.json","UTF-8")
        const data =  JSON.parse(dataString)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

const server = app.listen(2000, () => {
    console.log("estoy listo",server.address().port)
})