// Основная часть задания
function getObjOwnProps(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`)
        }
    }
}

// Тест

let testObjParent = {
    "a": 123,
    "b": "qwerty"
}

let testObjChild = Object.create(testObjParent)
testObjChild.q = 1
testObjChild.w = "asdfghj"
testObjChild.e = true

getObjOwnProps(testObjChild)