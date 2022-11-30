

function helloNameResponse(request, response, name){

	if (name){
		response.status = 200
		response.statusMessage = 'OK'
		response.header = 'Content-type: text/plain'
		response.write(`Hello, ${name}`)
		response.end()
	}
	else{
		response.status = 400
		response.statusMessage = 'Enter a name'
		response.header = 'Content-type: text/plain'
		response.write('Enter a name')
		response.end()
	}
}

module.exports = helloNameResponse