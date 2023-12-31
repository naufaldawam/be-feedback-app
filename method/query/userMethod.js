const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
})


const getUsers = (request, response) => {
    pool.query('SELECT * FROM useradmin ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM useradmin WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      tempObj = results.rows[0]
      response.status(200).json(tempObj)
    })
}

const getUserByUsername = (request, response) => {
  const {username,email} = request.params;

  pool.query('SELECT * FROM useradmin WHERE username = $1 OR email = $2 LIMIT 1', [username , email], (error, results) => {
    if (error) {
      throw error;
    }
    if (results.rows.length === 0) {
      response.status(404).json({ message: 'User not found' });
    } else {
      const user = results.rows[0];
      response.status(200).json(user);
    }
  });
};


const createUser = (request, response) => {
    const { username, email, password } = request.body
  
    pool.query('INSERT INTO useradmin (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].Id}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { username, email } = request.body
  
    pool.query(
      'UPDATE useradmin SET username = $1, email = $2 WHERE id = $3',
      [username, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM useradmin WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
}


module.exports = {
getUsers,
getUserById,
getUserByUsername,
createUser,
updateUser,
deleteUser,
}