const express = require('express');
const axios = require('axios');
const cors = require('cors');

const PORT = process.env.PORT || 5000
const app = express();
app.use(cors());

app.get("/api/flights", async (req, res) => {
    try {
        const response = await axios.get(
            "https://opensky-network.org/api/states/all",
            {
                auth: {
                    username: "sonamanayakkar-api-client",
                    password: "zXIpuzwZvxb9GNEyVfJVDZA8gftSfdRl"
                }
            }
        );

        res.json({
            data: response.data.states
        });

    } catch (err) {
        res.status(500).json({ error: "Failed" });
    }
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:5000");
});