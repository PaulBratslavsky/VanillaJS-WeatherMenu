class Storage {
    
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'London';
    }

    changeDefaultCity(newCity) {
        this.defaultCity = newCity;
    }

    getLocationCity() {

        if (localStorage.getItem('city') === null ) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        return this.city;

    }

    setLocationCity(city) {
        localStorage.setItem('city', city)
    }

    test() {
        console.log(this.defaultCity);
    }
}