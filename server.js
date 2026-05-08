const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/metrics', (req, res) => {
    res.json({
        leadTime: 6.2,
        cycleTime: 4.8,
        bugRate: 0.45,
        deployments: 3,
        prThroughput: 12
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));