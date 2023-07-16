const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const user = require('./method/query/userMethod')
const feedback = require('./method/query/feedbackMethod')


app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.send('Solusi 1 Interview Naufal for Nicolas')
})

app.get('/users', user.getUsers)
app.get('/user/:id', user.getUserById)
app.post('/user', user.createUser)
app.put('/user/:id', user.updateUser)
app.delete('/user/:id', user.deleteUser)

app.get('/feedbacks', feedback.getFeedbacks)
app.get('/feedback/:id', feedback.getFeedbackById)
app.post('/feedback', feedback.createFeedback)
app.put('/feedback/:id', feedback.updateFeedback)
app.delete('/feedback/:id', feedback.deleteFeedback)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
