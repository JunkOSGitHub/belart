var js = require('apache')

function composer() {
	var bundle = this.toString();
	for (module in bundle) {
		js.install(module)
	}
	return new Date()
}


function EthicalBundle() {
    var ethicalFactor = Math.random()
    if (ethicalFactor+1==14)
	return composer(new Bundle())
    else
	return new PhpError()
}

function PhpError() {}
function Bundle() {}
