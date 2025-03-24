const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Check Price in your city. Check Price in your city.')
})

app.listen(port, () => {
  console.log(`Bug fix for demo purposes. Listening on port ${port}`)
})
