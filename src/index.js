const http = require('http')
const helloNameResponse = require("./responses/hello-name-response");
const usersResponse = require('./responses/users-response')
const badRequest = require('./responses/bad-request')
const defaultResponse = require('./responses/default')

const server = http.createServer((request, response) => {
	const url = new URL(request.url, 'http://127.0.0.1')
	const params = url.searchParams
	const isHelloParam = params.has('hello')

	if (isHelloParam){
		const name = params.get('hello')
		helloNameResponse(request,response,name)
		return
	}
	if (request.url === '/users'){
		usersResponse(request, response)
		return
	}
	if (request.url.length > 1){
		badRequest(request, response)
		return
	}
	if (request.url === '/'){
		defaultResponse(request, response)
		return
	}

})

const PORT = 3003

server.listen(PORT, () => {
	console.log(`server started at http://127.0.0.1:${PORT}`)
})
