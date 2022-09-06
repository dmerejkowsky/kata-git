class TransactionParser() {
	constructor() {
		this.parsed = null
	}
	
	parse(stuff) {
		this.count ++
		this.parsed = stuff
	}
}