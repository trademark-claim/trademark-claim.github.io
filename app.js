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
    loadingScreen.classList.add('fade-out'); // Add the fade-out class
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.getElementById('content').style.display = 'block';
        initializeChart();
    }, 2000); // Match this duration with the CSS transition duration
}, 5000);

async function initializeChart() {
    const response = await fetch('https://raw.githubusercontent.com/trademark-claim/jsonhost/main/tempData.json');
    const data = await response.json();

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
                tension: 0.1,
                originalData: data
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        tooltipFormat: 'MMM d, HH:mm'
                    },
                    title: {
                        display: true,
                        text: 'Time'
                    },
                    ticks: {
                        callback: function (value, index, values) {
                            const date = new Date(value);
                            return date.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                            });
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    min: -10,
                    max: 110,
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
                        mode: 'x',
                    },
                    zoom: {
                        wheel: {
                            enabled: false
                        },
                        pinch: {
                            enabled: false
                        },
                        mode: 'x'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const date = new Date(context.parsed.x);
                            const timeString = date.toLocaleString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            });
                            return `Time: ${timeString}, Temp: ${context.parsed.y}\u00B0C`;
                        }
                    }
                }
            }
        }
    });

    document.getElementById('zoomInButton').addEventListener('click', () => {
        chart.zoom(1.1);
    });

    document.getElementById('zoomOutButton').addEventListener('click', () => {
        chart.zoom(0.9);
    });

    document.getElementById('panLeftButton').addEventListener('click', () => {
        chart.pan({ x: 50 });
    });

    document.getElementById('panRightButton').addEventListener('click', () => {
        chart.pan({ x: -50 });
    });

    window.addEventListener('resize', () => {
        chart.resize();
    });
}
