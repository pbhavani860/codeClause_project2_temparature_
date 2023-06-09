
function convertTemperature() {
    let temperatureInput = document.getElementById('temperature');
    let unitInput = document.getElementById('unit');
    let resultElement = document.getElementById('result');
    let detailsElement = document.getElementById('detailsId');
    

    let enteredTemperatureElement = document.getElementById('entered-temperature');
    let convertedCelsiusElement = document.getElementById('converted-celsius');
    let convertedFahrenheitElement = document.getElementById('converted-fahrenheit');
    let convertedKelvinElement = document.getElementById('converted-kelvin');

    let temperature = parseFloat(temperatureInput.value);
    let unit = unitInput.value;
    let convertedTemperature = '';

    
    let celsiusValue = null;
    let fahrenheitValue = null;
    let kelvinletValue = null;

    if (isNaN(temperature)) {
        
        resultElement.innerText = 'Invalid input. Please enter a valid number.';
        resultElement.style.display = "block";
        resultElement.style.color = "white";
        resultElement.style.backgroundColor = "red";

        enteredTemperatureElement.textContent = "Null";
        convertedCelsiusElement.textContent = "Null";
        convertedFahrenheitElement.textContent = "Null";
        convertedKelvinElement.textContent = "Null";
    
        return;
    }

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;

        celsiusValue = temperature;
        fahrenheitValue = fahrenheit;
        kelvinletValue = kelvin;

        convertedTemperature = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F or ${kelvin.toFixed(2)}K.`;

        resultElement.innerText = convertedTemperature;
        resultElement.style.display = "block";
        resultElement.style.color = "white";
        resultElement.style.backgroundColor = "rgb(0, 128, 0)";
    
    
        detailsElement.style.display = "block";
        
        enteredTemperatureElement.innerText = temperature;
    
        enteredTemperatureElement.innerText = temperature;
        convertedCelsiusElement.innerText = `${celsiusValue.toFixed(2)}°C`;
        convertedFahrenheitElement.innerText = `${fahrenheitValue.toFixed(2)}°F`;
        convertedKelvinElement.innerText = `${kelvinletValue.toFixed(2)}K`;
    
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = (temperature - 32) * 5/9 + 273.15;

        celsiusValue = celsius;
        fahrenheitValue = temperature;
        kelvinletValue = kelvin;

        convertedTemperature = `${temperature}°F is equal to ${celsius.toFixed(2)}°C or ${kelvin.toFixed(2)}K.`;

        resultElement.innerText = convertedTemperature;
        resultElement.style.display = "block";
        resultElement.style.color = "white";
        resultElement.style.backgroundColor = "rgb(0, 128, 0)";
    
    
        detailsElement.style.display = "block";
        
        enteredTemperatureElement.innerText = temperature;
    
        enteredTemperatureElement.innerText = temperature;
        convertedCelsiusElement.innerText = `${celsiusValue.toFixed(2)}°C`;
        convertedFahrenheitElement.innerText = `${fahrenheitValue.toFixed(2)}°F`;
        convertedKelvinElement.innerText = `${kelvinletValue.toFixed(2)}K`;
    
    } else if (unit === 'kelvin') {
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;

        celsiusValue = celsius;
        fahrenheitValue = fahrenheit;
        kelvinletValue = temperature;

        convertedTemperature = `${temperature}K is equal to ${celsius.toFixed(2)}°C or ${fahrenheit.toFixed(2)}°F.`;

        resultElement.innerText = convertedTemperature;
        resultElement.style.display = "block";
        resultElement.style.color = "white";
        resultElement.style.backgroundColor = "rgb(0, 128, 0)";
    
    
        detailsElement.style.display = "block";
        
        enteredTemperatureElement.innerText = temperature;
    
        enteredTemperatureElement.innerText = temperature;
        convertedCelsiusElement.innerText = `${celsiusValue.toFixed(2)}°C`;
        convertedFahrenheitElement.innerText = `${fahrenheitValue.toFixed(2)}°F`;
        convertedKelvinElement.innerText = `${kelvinletValue.toFixed(2)}K`;
    
    }


    // console.log(celsiusValue)
    // console.log(fahrenheitValue)
    // console.log(kelvinletValue)
}

var convertButton = document.getElementById('convert-btn');
convertButton.addEventListener('click', convertTemperature);