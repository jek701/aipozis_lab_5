const clientRequestOptions = {
    hostname: 'example.com',
    port: 80,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

const clientRequest = http.request(clientRequestOptions, (res) => {
    console.log(`Status Code: ${res.statusCode}`);
    console.log('Headers:', res.headers);

    res.on('data', (chunk) => {
        console.log(`Body: ${chunk}`);
    });
});

clientRequest.on('error', (error) => {
    console.error(`Problem with request: ${error.message}`);
});

clientRequest.end();
