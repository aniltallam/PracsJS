var util = require('./util')

util() // prints 'In util function'
console.log(util.addFunc(1, 2)) // 3
console.log(util.diffFunc(1, 2)) // -1
console.log(util.prodFunc(3, 2)) // 6
console.log(util.sqrFunc(2)) // 4
console.log(util.cubeFunc(3)) // 27
