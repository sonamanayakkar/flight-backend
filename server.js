const express = require('express');
const axios = require('axios');
const cors = require('cors');

const PORT = process.env.PORT || 8080
const app = express();
app.use(cors());
app.use(express.json())


app.get("/api/flights", async (req, res) => {
    try {
        let response = await fetch("https://opensky-network.org/api/states/all");

        response = await response.json();

        res.json({
            data: response
        });

    } catch (err) {
        res.status(500).json({ error: "Failed" });
    }
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:8080");
});