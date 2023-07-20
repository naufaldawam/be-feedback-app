const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5434, //jangan lupa ubah portnya.
})


const getFeedbacks = (request, response) => {
    pool.query('SELECT * FROM feedback ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      console.log('berhasil')
      response.status(200).json(results.rows)
    })
}


const getFeedbackById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * fROM Feedback WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createFeedback = (request, response) => {
    const { sender, valuetext, type } = request.body
    console.log(request.body)
    pool.query('INSERT INTO feedback (sender, valuetext, type, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *', [sender, valuetext, type], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`${type} added with name: ${results.rows[0].sender}`)
    })
}

const updateFeedback = (request, response) => {
    const id = parseInt(request.params.id)
    const { valuetext } = request.body
  
    pool.query(
      'UPDATE feedback SET valuetext = $1, updated_at = NOW() WHERE id = $3',
      [valuetext, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`${type} modified with ID: ${id}`)
      }
    )
}

const deleteFeedback = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM feedback WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`${type} deleted with ID: ${id}`)
    })
}


module.exports = {
getFeedbacks,
getFeedbackById,
createFeedback,
updateFeedback,
deleteFeedback,
}