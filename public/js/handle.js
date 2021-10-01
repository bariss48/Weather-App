console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const messageSeven = document.querySelector('#message-7')
const messageSekiz = document.querySelector('#message-8')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast.weather_descriptions[0]
                messageThree.textContent = data.forecast.temperature
                messageFour.textContent = data.forecast.feelslike
                messageFive.textContent = data.forecast.wind_speed
                messageSix.textContent = data.forecast.humidity
                messageSeven.textContent = data.forecast.weather_icons[0]
                messageSekiz.textContent = data.forecast.observation_time
            }
        })
    })
})