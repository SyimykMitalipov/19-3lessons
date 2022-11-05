// let userName = prompt("Tell me your name")




///// Регулярыне выражения

// let regExp  = new RegExp('s','gi')


// let regExp = /s/gi

// console.log(userName.match(regExp))





// let phoneInput = document.querySelector('.phoneInput')
// let phoneButton = document.querySelector('.button')
// let result = document.querySelector('#result')
// let regExp = /\w/g


// let regExp = /^\+996\d{3} \d{2}-\d{2}-\d{2}$/ig



// console.log(userName.replace(regExp,'*'))
// phoneButton.addEventListener('click',() => {
//   if(regExp.test(phoneInput.value)){
//     result.innerText = 'Success'
//     result.style.color  = 'green'
//   }else {
//     result.innerText = 'Failed'
//     result.style.color = 'red'
//   }
// })





/// recursion 1 


// let num = 0;

// for(let i = 0; i<30;i++) {
//   num++
//   console.log(num);
// }



// let num = 0;
// const addNum = () => {
//   num++ 
//   console.log(num);
//   if(num >= 30) return 
//   addNum()
// }
// addNum()




/// recutsion 2


// let num = 0;
// let field  = ''

// const addNum = () => {
//   num++
//   field += `${num}`
//   console.log(field);
//   if(num >= 50) return
//   addNum()
// }



// addNum()




const people = {
  "John": {
    age:20,
    parents: {
      'Anna':{
        age: 45,
        parents: {
          "Fred": {
            age: 80
          },
          'Marry': {
            age: 78
          }
        }
      },
      "Alex":{
        age: 46
      }
    }
  },
  "Sam": {
  age: 25,
  parents: {
    "Susan": {
      age: 50
    },
    "Stepan": {
      age:52,

    }
  }
  }
}

const personList = (obj) => {
  for(let key in obj.parents){
      personList(obj.parents[key])
  }
}




// people["John"]
for(let key in people){
  personList(people[key])
}

























