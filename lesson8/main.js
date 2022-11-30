







// const promise = new Promise((resolve,reject) => {
//   /// get response from api
//     setTimeout(() => {
//       // dsds
//     }, 1000)
//   const response = req.response
//   resolve(response)
//   reject('Error')

// }).then((response) => {
//   console.log(response);
// }).catch(() => {
//   console.log('error');
// })



// const req = new XMLHttpRequest()
// req.open('GET','server.json')
// req.setRequestHeader('Content-type','application/json')
// req.send(data)
// req.addEventListener('load',() => {

// })



// fetch('https://jsonplaceholder.typicode.com/users',{
//   method: 'GET',
//   // headers: {
//   //   'Content-type': 'application/json'
//   // }
// }).then(())



// const feth1 = new Promise(url,method,(resolve,reject) => {
//   const req = new XMLHttpRequest()
//   req.open(method.method,url)
//   req.setRequestHeader(method.headers)
//   req.send(method.body)
//   req.addEventListener('load',() => {
//     const response = req.response
//     resolve(response)
//     reject()
//   })
// })




// const obj = {
//   name: 'Syimyk',
//   age: 20,
//   firstName: 'Mitalipov',
//   position: 'Front-End Dev'
// }


// const objKey = Object.keys(obj)
// const objValue = Object.values(obj)
// console.log(objKey, 'keys');
// console.log(objValue, 'value');




// Array.prototype.map2 = function(elem,idx,arrar) {
//   let result = []
//   const thisArray = this;
//   for(let)


// return result
// }




// const wrapper = document.querySelector('.wrapper')
// const submit = document.querySelector('.submit')


// const getUser = async() => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const result = await response.json()
//   const userID = document.querySelector('.user').value
//   const filtered = result.filter((user) => user.id === +userID)
//   console.log(filtered,'filtered');
//   filtered.forEach(user => {
//       const block = document.createElement('div')
//       block.innerHTML = `
//       <div class="block">
//       <p>${user.name}</p>
//       </div>
//       `
//     wrapper.append(block)
//   });

//   console.log(result,'result');

// }

// submit.addEventListener('click',getUser)




