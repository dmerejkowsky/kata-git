const computeTransactionPrice = require('./finance.js')
const test = require('tape')

test('computing transaction prices', (t) => {
	const actual = computeTransactionPrice("")
	t.equal(actual, 1)
	t.end()
})