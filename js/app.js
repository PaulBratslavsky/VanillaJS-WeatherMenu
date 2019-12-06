/**********************************************    
    APP: WEATHER JS
**********************************************/
const API_KEY = 'a35409ef60173b96abe92c1c1aaab626';

// Create new instance of WeatherApi Object
const weatherAPI = new WeatherAPI(API_KEY);

// Create new instance of UI Object
const ui = new UI();

/**********************************************    
    GET INITIAL WEATHER ON DOM LOAD
**********************************************/

document.addEventListener( 'DOMContentLoaded', getWeather('Bangkok') );

/**********************************************    
    HANDLE CITY CHANGE MODAL WINDOW
**********************************************/

document.getElementById('change-city').addEventListener( 'click', () => {
    

    if ( getCityName() === '' || undefined ) {
        showError('Please Input a City');
    } else {
        getWeather(getCityName());
        resetInput();
        clearError();   
    }
});


/**********************************************    
    FUNCTIONS
**********************************************/
function getWeather(city) {

    weatherAPI.getLocalWeather(city)
    .then( result => {
        ui.fillData(result);
        // console.log(result, "Local Wether Response");
    })
    .catch( error => { 
        // console.error(error, "From Error");
        showError('City Not Found'); 
    });

}

function getCityName() {
    const city = document.getElementById('city');
    return city.value;
}

function resetInput() {
    document.getElementById('city').value = '';
}


