


/*document.addEventListener('DOMContentLoaded', function () {
    new Typed('.typed-text', {
        strings: ["Computer Science @ UCLA", "Software Engineer", "Deep Learning Researcher", "Entrepreneur"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        showCursor: false,
        smartBackspace: true
    });

    const apiKey = '918b73c52a5fc214237ad333349673ec'; // Replace with your OpenWeatherMap API key
    const lat = '37.548271';
    const lon = '-121.988571';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(url)
        .then(function (response) {
            const weather = response.data.weather[0].description;
            const temp = response.data.main.temp;
            document.getElementById('weather').textContent = `${temp}°F, ${weather}`;//`${weather}, ${temp}°F`;
        })
        .catch(function (error) {
            console.log('Error fetching weather data:', error);
        });

    // Fetch time using JavaScript's Date object
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });
        document.getElementById('time').textContent = timeString;
    };

    updateTime();
    setInterval(updateTime, 1000); // Update time every second
});*/