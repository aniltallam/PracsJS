var MyClass = function () {
  this.a = 10
  var b = 9 // private variable
  this.myFunc = function () {
    console.log(this.a + b)
  }
}

MyClass.staticFunc = function (msg) {
  console.log(msg)
}

MyClass.prototype.protoFunc = function (msg) {
  console.log(msg + ', ' + this.a)
}

var obj1 = new MyClass()

MyClass.prototype.protoFuncLater = function (msg) {
  console.log(msg + ', ' + this.a)
}

obj1.myFunc() // prints 10
MyClass.staticFunc('Hello') // prints Hello
console.log('obj1.a =', obj1.a) // prints 10
console.log('obj1.b =', obj1.b) // prints undefined
console.log('obj1.staticFunc =', obj1.staticFunc) // prints undefined
obj1.protoFunc('Hi') // prints Hi, 10
obj1.protoFuncLater('Hi') // prints Hi, 10
MyClass.prototype.protoFunc('Hello') // prints Hello, undefined

var obj2 = new MyClass()
obj1.instanceOnlyFunc = function () {
  console.log(this.b, this.instanceOnlyProp)
}
obj1.instanceOnlyProp = 25

obj1.b = 11
obj2.b = 20

obj1.instanceOnlyFunc() // 11 25
console.log('obj2.instanceOnlyProp =', obj2.instanceOnlyProp) // prints undefined
console.log('obj2.instanceOnlyFunc =', obj2.instanceOnlyFunc) // prints undefined

