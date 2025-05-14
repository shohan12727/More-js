const { log } = require("console")
const express = require ("express")
const app = express() 
const port = 78
 
app.get('/', (req,res) => {
  res.send("Hello world")
})

app.listen(port, () => {
  console.log (`Example app listening on
    port ${port}`)
})
