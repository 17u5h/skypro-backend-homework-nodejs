
const defaultResponse = (request, response) => {
	response.status = 200
	response.statusMessage = 'OK'
	response.header = 'Content-type: text/plain'
	response.write('Hello from backend')
	response.end()
}
module.exports = defaultResponse