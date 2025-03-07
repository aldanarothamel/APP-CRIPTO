const endpoint = 'https://api.binance.com/api/v3/ticker/price';

const fetchData = async () => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        mostrarData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const mostrarData = (data) => {
    const body = data.map(({ symbol, price }) => 
        `<tr><td>${symbol}</td><td>${price}</td></tr>`
    ).join('');
    document.getElementById('data').innerHTML = body;
};

fetchData();
