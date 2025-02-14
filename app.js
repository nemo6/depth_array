const util = require("util")

let data = mockup()
.split(/\r\n|\n/)
.filter( x => x != "" )

console.log( { data: data.length } )
console.log( util.inspect( depthArray(data), { showHidden: true, depth:Infinity } ) )

//

function last(array,n){
	if( n == 0 ) return array
	return (new Array(n)).fill(0).reduce( (o,i) => {
		let v = o.at(-1).array
		if(!v)
			v = o.at(-1)
		return v
	}, array )
}

function depthArray( m, array=[] ){

	for( let x of m ){
		let level = x.fmatch(/\t/g).length
		last(array,level).push( { level:level, array:[ x ] } )
	}
	return array

}

function mockup(){
return `
_ = require "lodash"

yearsOld = max: 10, ida: 9, time: 11

console.log yearsOld

( () ->
	n = 1
	foo = (n) => n*n
	console.log foo 5
	return
)()

# f_server()

f_server = (x) ->

	http = require("http")
	PORT = 8080

	http.createServer ( req , res ) =>

		res.writeHead 200,{"content-type":"text/{n};charset=utf8"}

		res.end ( JSON.stringify _.range(0,9) )

	.listen PORT

	console.log "Running at port #{PORT}"

Array::Map = (x) =>
	x = _.ary x, 1 if typeof x == "function"
	_.map this,x

print = (x) =>
	console.log x
`
}
