const express = require("express")
const app = express()
const port = 4500
app.get('/' , (req,res) =>{
  res.send("Hello Banglsdesh")
})

app.listen(port, () => {
  console.log(`example app listening on port ${port}`)
})