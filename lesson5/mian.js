



const som = document.querySelector('#som')
const usd = document.querySelector('#usd')






// som.addEventListener('input',() => {
//     const request = new XMLHttpRequest();
//     request.open('GET','data.json')
//     request.setRequestHeader('Content-Type','application/json')
//     request.send()
//     request.addEventListener('load',() => {
//         const response = JSON.parse(request.response)
//         console.log(response,'response')
//         usd.value = (som.value / response.usd).toFixed(2 )
//     })
// })
// usd.addEventListener('input',() => {
//     const request = new XMLHttpRequest();
//     request.open('GET','data.json')
//     request.setRequestHeader('Content-Type','application/json')
//     request.send()
//     request.addEventListener('load',() => {
//         const response = JSON.parse(request.response)
//         console.log(response,'response')
//         som.value = (som.value * response.usd).toFixed(2 )
//     })
// })


const convertor = (elem,target,isTrue) => {
    elem.addEventListener('input',() => {
        const request = new XMLHttpRequest();
        request.open('GET','data.json')
        request.setRequestHeader('Content-Type','application/json')
        request.send()
        request.addEventListener('load',() => {
            const response = JSON.parse(request.response)
           isTrue ?
                 target.value = (elem.value / response.usd).toFixed(2)
                :
                target.value = ( elem.value * response.usd ).toFixed(2)

             elem.value === '' && (target.value = '')
        })
    })
}
convertor(som,usd,1)
convertor(usd,som)  /// '',NaN,null,undefined 0

//// DRY don't repeat your self


///// som === 1 ? console.log('usd') :console.log('som')








