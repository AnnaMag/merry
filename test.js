const test = require('tape')
const merry = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(merry)
})
