// Основная часть задания
function createNullObj(){
    return Object.create(null)
}

// Тест

testObj = createNullObj()

console.log(testObj)
console.log(Object.keys(testObj).length)