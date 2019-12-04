$(document).ready(()=> {
    $('#get-weather').click (()=> {
        let city = $('#city').val()
        if(city !== '') {
            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/weather?q='+city+"&units=metric"+"&appid=1e8d88f075cb1cf9670c77d2ecdcab13",
                type: "GET",
                dataType : "jsonp",
                success : (data) => {
                    $('.weather-div .set-weather').css('visibility','visible');
                    $('.icon-name').html(`<span class="city-name">${city}</span>`);
                    $('.icon-name').append(`<span id="icon"><img id="wicon" src="" alt="Weather icon"></span>`)
                    $('.icon-name').append(`<span class="temperature">${data.main.temp}&#8451;, </span>`);
                    $('.icon-name').append(`<span class="weather">${data.weather[0].main} </soan>`);

                    $('.weather-data').html(`<p>Description = ${data.weather[0].description}</p>`)
                    $('.weather-data').append(`<p>Max temp = ${data.main.temp_max} </p>`)
                    $('.weather-data').append(`<p>Min temp = ${data.main.temp_min} </p>`)

                    let iconcode = data.weather[0].icon;
                    let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                    $('#wicon').attr('src', iconurl);

                },
                error: (error) => {
                    if(error.status === 404) {
                        alert('City not found')
                    }
                }
            });
        }
        else {
            alert('empty string')
        }
    })
})