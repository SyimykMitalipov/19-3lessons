
/// Promise





/// Callback Hell

// setTimeout(() => {
//     console.log('call1');
//     setTimeout(() => {
//         console.log('call 2');
//         setTimeout(() => {
//             console.log('call3');
//             setTimeout(() => {
//                 console.log('call3');
//                 setTimeout(() => {
//                     console.log('call3');
//                     setTimeout(() => {
//                         console.log('call3');
//                         setTimeout(() => {
//                             console.log('call3');
//                             setTimeout(() => {
//                                 console.log('call3');
//                                 setTimeout(() => {
//                                     console.log('call3');
//                                     setTimeout(() => {
//                                         console.log('call3');
//                                         setTimeout(() => {
//                                             console.log('call3');
//                                             setTimeout(() => {
//                                                 console.log('call3');
//                                             }, 1000)
//                                         }, 1000)
//                                     }, 1000)
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         },1000)
//     },1000)
// },1000)
//
//

//// Promise

const wrapper = document.querySelector('.wrapper')

const req = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()
    req.open('GET',"https://jsonplaceholder.typicode.com/users")
    req.setRequestHeader('Content-Type', 'application/json')
    req.send()
    req.addEventListener('load', () => {
        const data = JSON.parse(req.response)
        resolve(data)
        reject()
    })
})

req.then((data) => {
    console.log(data,'data');
    const elem = document.createElement('div')
    elem.innerHTML = `
        <div>
            <p>${data[0].name}</p>
        </div>
    `
    wrapper.append(elem)
}).catch(() => {
    console.log('failed')
}).finally(() => {
    setTimeout(() => {
        console.clear()
    }, 3000)
})


// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'GET',
//     headers: {
//         "Content-Type": 'application/json'
//     }
// }).then(res => res.json())
//     .then(result => result.forEach((user) => console.log(user.name)))
//     .catch(() => {
//         console.log('failed')
//     }).finally(() => {
//         setTimeout(() => {
//             console.clear()
//         }, 3000)
//     })

// const prod = (product) => {
//     return product
// }
//
//
// prod({name:'Syimyk'}).name



































