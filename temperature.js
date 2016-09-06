var Temperature = {
    toFahrenheit (celsius) { 
        return (celsius*(9.0/5.0) + 32.0);
    },
    toCelsius (fahrenheit) { 
        return (fahrenheit-32.0) * (5.0 / 9.0)
    }
}

var tempToday = 82.0;
var tempInCelsius = Math.round(Temperature.toCelsius(tempToday));
var message = 'Today\'s temperature is ' + tempToday + '°F, which is ' + tempInCelsius + '°C.';

console.log(message);

//Sources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects and https://docs.oracle.com/javase/tutorial/java/data/strings.html
/*global math */
