const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json([
    {
    name: "bob",
    email:"bob@gmai.com"
  
    },
    {
        name: "Sai",
        email:"sai@gmai.com"
      
    },
    {
        name: "Teja",
        email:"teja@gmai.com"
      
    }
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})