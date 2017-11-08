var util = function () {
  console.log('In util function')
}
util.addFunc = function (a, b) {
  return a + b
}

function diffFunc (a, b) {
  return a - b
}
util.diffFunc = diffFunc

util.prodFunc = function prodFunc (a, b) {
  return a * b
}

util.sqrFunc = function (a) {
  // return prodFunc(a, a) -- can't use this way
  return this.prodFunc(a, a) // or util.prodFunc(a, a)
}

util.cubeFunc = function (a) {
  return util.prodFunc(a, a) * a
}

module.exports = util
