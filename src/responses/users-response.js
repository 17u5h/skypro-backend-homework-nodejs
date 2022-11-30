const getUsers = require('../modules/users')

const usersResponse = (request, response) => {
	response.status = 200
	response.statusMessage = 'OK'
	response.header = 'Content-type: application/json'
	response.write(getUsers())
	response.end()
}
module.exports = usersResponse