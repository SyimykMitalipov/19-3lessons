// // console.log('hi')
//
//
//
//
// const object = {
//     name: 'Syimyk',
//     age:20
// }
//
// console.log(object.name)
// console.log(object["name"])
// const objStr = JSON.stringify(object)
//
// console.log(objStr,'object')
// console.log(JSON.parse(objStr).name)



const btn = document.querySelector('#send')


btn.addEventListener('click',() => {
    const request = new XMLHttpRequest() // создание запроса
    request.open('GET','data.json') // добавление метода и ссылки
    request.setRequestHeader('Content-Type','application/json') ///


    request.send()
    request.addEventListener('load',() => {
        // console.log(request.response)
       const data = JSON.parse(request.response)
        document.querySelector('#name').innerHTML = data.name
        document.querySelector('#age').innerHTML = data.age
    })
})



/// string undefined null boolean примитивы
/// object array  не примитивы



let num = 10
let num2 = 10
console.log(num === num)
let str1 = 's'
let str2 = 's'
console.log(str1 === str2)


let str3 = str1 + str2

const obj1 = {
    name: 'S'
}
const obj2 = obj1

obj2.name = 'H'


const obj3 = {...obj1,age: 20}

const arr1 = [1,2,3]
const arr2= [4,5,6]
const arr3 = [...arr1,...arr2]



console.log(arr3,'arr3')
obj3.name = 'X'
console.log( obj3,'obj3')

console.log(obj1)
console.log(obj2)