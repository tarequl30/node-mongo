const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const users = ['robin' , 'smith', ' hanks', 'jack'];
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('open node onk joss')
});
// app.get('/world/country' , (req, res) => {
//   res.send({name: 'Bangladesh' , population: 154554551, season: 6, capital: 'Dhaka'})
// })
//GET
app.get('/users/:id' , (req,res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({id , name})
})

//POST
app.post('/addUser', (req,res) => {
  //save to database
  const user= req.body;
  user.id = 55;
  res.send(user)
})

app.listen(3001, () => console.log('listening port 3001'))