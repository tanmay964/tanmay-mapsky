


    

    var weatherForm = document.querySelector('.weather-form')
    var search = document.querySelector('input')
    var messageOne = document.querySelector('#message1')
    var messageTwo = document.querySelector('#message2')

   
    
        weatherForm.addEventListener('click', (e) =>{
            e.preventDefault()

            var location = search.value

           
            messageOne.textContent = "Loading ..."
            messageTwo.textContent = ""
            fetch('http://localhost:3000/weather?address=' + location).then((response) => {
                response.json().then((data) => {
                    if (data.error) {
                        messageOne.textContent = data.error
                    } else {
                        messageOne.textContent = data.location
                        messageTwo.textContent = data.forecast
                    }
                })
            })

        })