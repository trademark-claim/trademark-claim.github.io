const temperatureData = [
    { "temp": 53, "time": "2024-05-25T11:01:09.247716" },
    { "temp": 51, "time": "2024-05-25T11:11:09.247716" },
    { "temp": 51, "time": "2024-05-25T11:21:09.247716" },
    { "temp": 56, "time": "2024-05-25T11:31:09.247716" },
    { "temp": 60, "time": "2024-05-25T11:41:09.247716" },
    { "temp": 65, "time": "2024-05-25T11:51:09.247716" },
    { "temp": 69, "time": "2024-05-25T12:01:09.247716" },
    { "temp": 71, "time": "2024-05-25T12:11:09.247716" },
    { "temp": 70, "time": "2024-05-25T12:21:09.247716" },
    { "temp": 68, "time": "2024-05-25T12:31:09.247716" },
    { "temp": 73, "time": "2024-05-25T12:41:09.247716" },
    { "temp": 76, "time": "2024-05-25T12:51:09.247716" },
    { "temp": 76, "time": "2024-05-25T13:01:09.247716" },
    { "temp": 73, "time": "2024-05-25T13:11:09.247716" },
    { "temp": 72, "time": "2024-05-25T13:21:09.247716" },
    { "temp": 71, "time": "2024-05-25T13:31:09.247716" },
    { "temp": 71, "time": "2024-05-25T13:41:09.247716" },
    { "temp": 73, "time": "2024-05-25T13:51:09.247716" },
    { "temp": 75, "time": "2024-05-25T14:01:09.247716" },
    { "temp": 78, "time": "2024-05-25T14:11:09.247716" },
    { "temp": 80, "time": "2024-05-25T14:21:09.247716" },
    { "temp": 79, "time": "2024-05-25T14:31:09.247716" },
    { "temp": 76, "time": "2024-05-25T14:41:09.247716" },
    { "temp": 76, "time": "2024-05-25T14:51:09.247716" },
    { "temp": 80, "time": "2024-05-25T15:01:09.247716" },
    { "temp": 80, "time": "2024-05-25T15:11:09.247716" },
    { "temp": 82, "time": "2024-05-25T15:21:09.247716" },
    { "temp": 80, "time": "2024-05-25T15:31:09.247716" },
    { "temp": 82, "time": "2024-05-25T15:41:09.247716" },
    { "temp": 79, "time": "2024-05-25T15:51:09.247716" },
    { "temp": 77, "time": "2024-05-25T16:01:09.247716" },
    { "temp": 75, "time": "2024-05-25T16:11:09.247716" },
    { "temp": 73, "time": "2024-05-25T16:21:09.247716" },
    { "temp": 73, "time": "2024-05-25T16:31:09.247716" },
    { "temp": 73, "time": "2024-05-25T16:41:09.247716" },
    { "temp": 74, "time": "2024-05-25T16:51:09.247716" },
    { "temp": 75, "time": "2024-05-25T17:01:09.247716" },
    { "temp": 72, "time": "2024-05-25T17:11:09.247716" },
    { "temp": 70, "time": "2024-05-25T17:21:09.247716" },
    { "temp": 67, "time": "2024-05-25T17:31:09.247716" },
    { "temp": 63, "time": "2024-05-25T17:41:09.247716" },
    { "temp": 61, "time": "2024-05-25T17:51:09.247716" },
    { "temp": 58, "time": "2024-05-25T18:01:09.247716" },
    { "temp": 55, "time": "2024-05-25T18:11:09.247716" },
    { "temp": 54, "time": "2024-05-25T18:21:09.247716" },
    { "temp": 56, "time": "2024-05-25T18:31:09.247716" },
    { "temp": 59, "time": "2024-05-25T18:41:09.247716" },
    { "temp": 61, "time": "2024-05-25T18:51:09.247716" },
    { "temp": 64, "time": "2024-05-25T19:01:09.247716" },
    { "temp": 66, "time": "2024-05-25T19:11:09.247716" },
    { "temp": 70, "time": "2024-05-25T19:21:09.247716" },
    { "temp": 73, "time": "2024-05-25T19:31:09.247716" },
    { "temp": 75, "time": "2024-05-25T19:41:09.247716" },
    { "temp": 78, "time": "2024-05-25T19:51:09.247716" },
    { "temp": 79, "time": "2024-05-25T20:01:09.247716" },
    { "temp": 80, "time": "2024-05-25T20:11:09.247716" },
    { "temp": 83, "time": "2024-05-25T20:21:09.247716" },
    { "temp": 85, "time": "2024-05-25T20:31:09.247716" },
    { "temp": 87, "time": "2024-05-25T20:41:09.247716" },
    { "temp": 88, "time": "2024-05-25T20:51:09.247716" },
    { "temp": 85, "time": "2024-05-25T21:01:09.247716" },
    { "temp": 81, "time": "2024-05-25T21:11:09.247716" },
    { "temp": 78, "time": "2024-05-25T21:21:09.247716" },
    { "temp": 75, "time": "2024-05-25T21:31:09.247716" },
    { "temp": 73, "time": "2024-05-25T21:41:09.247716" },
    { "temp": 71, "time": "2024-05-25T21:51:09.247716" },
    { "temp": 68, "time": "2024-05-25T22:01:09.247716" },
    { "temp": 64, "time": "2024-05-25T22:11:09.247716" },
    { "temp": 61, "time": "2024-05-25T22:21:09.247716" },
    { "temp": 60, "time": "2024-05-25T22:31:09.247716" },
    { "temp": 62, "time": "2024-05-25T22:41:09.247716" },
    { "temp": 65, "time": "2024-05-25T22:51:09.247716" },
    { "temp": 68, "time": "2024-05-25T23:01:09.247716" },
    { "temp": 72, "time": "2024-05-25T23:11:09.247716" },
    { "temp": 75, "time": "2024-05-25T23:21:09.247716" },
    { "temp": 80, "time": "2024-05-25T23:31:09.247716" },
    { "temp": 100, "time": "2024-05-25T23:41:09.247716" },
    { "temp": 100, "time": "2024-05-25T23:51:09.247716" },
    { "temp": 100, "time": "2024-05-26T00:01:09.247716" },
    { "temp": 100, "time": "2024-05-26T00:11:09.247716" },
    { "temp": 98, "time": "2024-05-26T00:21:09.247716" },
    { "temp": 95, "time": "2024-05-26T00:31:09.247716" },
    { "temp": 90, "time": "2024-05-26T00:41:09.247716" },
    { "temp": 94, "time": "2024-05-26T00:51:09.247716" },
    { "temp": 89, "time": "2024-05-26T01:01:09.247716" },
    { "temp": 89, "time": "2024-05-26T01:11:09.247716" },
    { "temp": 85, "time": "2024-05-26T01:21:09.247716" },
    { "temp": 90, "time": "2024-05-26T01:31:09.247716" },
    { "temp": 86, "time": "2024-05-26T01:41:09.247716" },
    { "temp": 89, "time": "2024-05-26T01:51:09.247716" },
    { "temp": 91, "time": "2024-05-26T02:01:09.247716" },
    { "temp": 96, "time": "2024-05-26T02:11:09.247716" },
    { "temp": 99, "time": "2024-05-26T02:21:09.247716" },
    { "temp": 99, "time": "2024-05-26T02:31:09.247716" },
    { "temp": 100, "time": "2024-05-26T02:41:09.247716" },
    { "temp": 100, "time": "2024-05-26T02:51:09.247716" },
    { "temp": 100, "time": "2024-05-26T03:01:09.247716" },
    { "temp": 99, "time": "2024-05-26T03:11:09.247716" },
    { "temp": 100, "time": "2024-05-26T03:21:09.247716" },
    { "temp": 95, "time": "2024-05-26T03:31:09.247716" }
];



if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (error) => {
            console.log('ServiceWorker registration failed: ', error);
        });
}

let loadingText = document.getElementById('loading-text');
let loadingPhases = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
let phaseIndex = 0;

function updateLoadingText() {
    loadingText.textContent = loadingPhases[phaseIndex];
    phaseIndex = (phaseIndex + 1) % loadingPhases.length;
}

let loadingInterval = setInterval(updateLoadingText, 300);

setTimeout(() => {
    clearInterval(loadingInterval);
    let loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.animation = 'fadeOut 2s';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.getElementById('content').style.display = 'block';
        initializeChart();
    }, 1000);
}, 5000);

async function initializeChart() {
    let data = temperatureData;
    let ctx = document.getElementById('temperatureChart').getContext('2d');
    let labels = data.map(entry => new Date(entry.time));
    let temperatures = data.map(entry => entry.temp);

    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (\u00B0C)',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'minute',
                        tooltipFormat: 'HH:mm:ss'
                    },
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Temperature (\u00B0C)'
                    }
                }
            },
            plugins: {
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'x'
                    },
                    zoom: {
                        enabled: true,
                        mode: 'x'
                    }
                }
            }
        }
    });
    
    setInterval(() => {
        let newTemperature = Math.max(0, Math.min(100, temperatures[temperatures.length - 1] + Math.floor(Math.random() * 5) - Math.floor(Math.random() * 5)));
        temperatures.push(newTemperature);
        temperatures.shift();

        labels.push(new Date());
        labels.shift();

        chart.update();
    }, 1000);
    
}
