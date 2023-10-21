// Основная часть задания
function isObjHasProp(obj, propname){
    return propname in obj
}

// Тест

testObjParent = {
    // a: 123,
    b: true
}

function showPropCheck(obj, propName){
    console.log(`${propName} check: ${isObjHasProp(testObjChild, propName)}`)
}

testObjChild = Object.create(testObjParent)
testObjChild.c = "qwerty"
testObjChild.d = false
testObjChild.e = 100500

showPropCheck(testObjChild, "a")
showPropCheck(testObjChild, "b")
showPropCheck(testObjChild, "c")
showPropCheck(testObjChild, "d")
showPropCheck(testObjChild, "e")
showPropCheck(testObjChild, "g")
showPropCheck(testObjChild, "h")
showPropCheck(testObjChild, "i")
showPropCheck(testObjChild, "j")
showPropCheck(testObjChild, "k")
showPropCheck(testObjChild, "l")
showPropCheck(testObjChild, "m")
showPropCheck(testObjChild, "n")

// console.log(isObjHasProp(testObj2, "a"))
// console.log(isObjHasProp(testObj2, "b"))
// console.log(isObjHasProp(testObj2, "c"))
// console.log(isObjHasProp(testObj2, "d"))
// console.log(isObjHasProp(testObj2, "e"))
// console.log(isObjHasProp(testObj2, "f"))
// console.log(isObjHasProp(testObj2, "g"))
// console.log(isObjHasProp(testObj2, "h"))
// console.log(isObjHasProp(testObj2, "i"))
// console.log(isObjHasProp(testObj2, "j"))