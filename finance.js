class TransactionParser {
	constructor() {
		this.parsed = null
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