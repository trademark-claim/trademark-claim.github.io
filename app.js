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

function generateRandomTemperatures(num, range = 5) {
    let base = Math.floor(Math.random() * 100);
    let temperatures = [base];
    for (let i = 1; i < num; i++) {
        base = Math.max(0, Math.min(100, base + Math.floor(Math.random() * range) - Math.floor(Math.random() * range)));
        temperatures.push(base);
    }
    return temperatures;
}

function getFormattedTime(secondsOffset) {
    let now = new Date();
    now.setSeconds(now.getSeconds() - secondsOffset);
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function initializeChart() {
    let ctx = document.getElementById('temperatureChart').getContext('2d');
    let labels = Array.from({ length: 10 }, (_, i) => getFormattedTime((9 - i) * 10));
    let data = generateRandomTemperatures(10);

    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (\u00B0C)',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    min: 0,
                    max: 100
                }
            }
        }
    });

    setInterval(() => {
        let newTemperature = Math.max(0, Math.min(100, data[data.length - 1] + Math.floor(Math.random() * 5) - Math.floor(Math.random() * 5)));
        data.push(newTemperature);
        data.shift();

        labels.push(getFormattedTime(0));
        labels.shift();

        chart.update();
    }, 10000);
}
