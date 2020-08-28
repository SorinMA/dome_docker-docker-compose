const express = require("express")

const app = express()

app.get('/', (req, res) => {
    console.log("sex")
    res.send('Welcome form docker')
    
})

app.listen(3000, () => {
    console.log("listen on port 3000")
})