const express = require('express')
const app = express()

const Note = require('./models/note')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoDbPath = "mongodb+srv://vrundraval24:vrundraval24@cluster0.iswobtl.mongodb.net/notesdb"
mongoose.connect(mongoDbPath).then(function () {
    app.get('/', (req, res) => {
        const response = { statusCode: res.statusCode, message: "API is working. "}
        res.json(response)
    })

    const noteRouter = require('./routes/noteRoutes')
    app.use('/notes', noteRouter)

})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Server is listening at http://localhost:" + PORT)
})