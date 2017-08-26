const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

const getTempByCityName = (cityName) => (
    fetch(url + cityName)
    .then(res => res.json())
    .then(resJSON => resJSON.main.temp)
);

export default getTempByCityName;
