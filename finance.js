class TransactionParser {
	constructor() {
		this.parsed = null
		this.count = 0
	}
	
	parse(stuff) {
		this.count ++
		this.parsed = stuff
	}
}

const computeTransactionPrice = (stuff) => {
	const parser = new TransactionParser()
	parser.parse(stuff)
	return parser.count
}

module.exports = computeTransactionPrice