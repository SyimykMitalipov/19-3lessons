



const search = document.querySelector('#search')
const nameCity = document.querySelector('.name')
const temp = document.querySelector('.temp')
const appId = 'e417df62e04d3b1b111abeab19cea714'




//  req.send()
//  req.response




// const getWeather = ()=> {
//   const cityName = document.querySelector('#cityName').value
//   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appId}`)
//   .then((response) => response.json())
//   .then((result) => {
//       console.log(result,'result');
//     nameCity.innerHTML = result.name ? result.name : result.message
//     temp.innerHTML = Math.round((result.main.temp - 273)) + '&deg C'
//   } )
//   .catch((e) => {
//     const cityName = document.querySelector('#cityName').value
//     console.log(e,'error')
//     cityName.innerHTML = 'Такого города не существует'
//   })
// }



// search.addEventListener('click',getWeather)





//// async await 
// const wrapperUser = document.querySelector('.user')
const wrapper = document.querySelector('.wrapper')
// const wrapperUser = document.createElement('div')
wrapper.innerHTML =`
<div class="wrapperUser">
</div>
`




async function getUsers() {
  try{
    const wrapperUser = document.querySelector('.wrapperUser')
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await result.json()
    data.forEach(user => {
      const card = document.createElement('div')
      card.innerHTML = `
        <div class="card">
        <p>${user.name}</p>
        <p>${user.email}</p>
        </div>
      `
      wrapperUser.append(card)
    });

  }catch(e) {
    console.log('error');
  }finally{
    console.log('finally');
  }
}

getUsers()















