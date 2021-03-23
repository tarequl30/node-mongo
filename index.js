const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('open node')
})

app.listen(3000, () => console.log('listening port 3000'))