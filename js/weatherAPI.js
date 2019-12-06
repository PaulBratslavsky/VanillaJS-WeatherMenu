class WeatherAPI {
    
    constructor(apiKey) {
        this.apiKey = apiKey
        this.initialCity = 'London'
    }

    async getLocalWeather(city = this.initialCity) {
        
        const apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.apiKey}`;

        // Make Network Request
        const localWeatherResponse = await fetch(apiCall); 
        const localWeather = await localWeatherResponse.json();

        return {
            localWeather
        }
    }

    changeInitialCity(newCity) {
        this.initialCity = newCity;
    }
    
}