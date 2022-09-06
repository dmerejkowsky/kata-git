class TransactionParser() {
	constructor() {
		this.parsed = null
		this.count = 0
	}
	
	parse(stuff) {
		this.count ++
		this.parsed = stuff
	}
}