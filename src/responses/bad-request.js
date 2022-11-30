
const badRequest = (request, response) => {
	response.statusCode = 500
	response.statusMessage = 'Internal Server Error'
	response.end()
}
module.exports = badRequest