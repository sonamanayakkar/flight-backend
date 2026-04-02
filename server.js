const express = require('express');
const axios = require('axios');
const cors = require('cors');

const PORT = process.env.PORT || 8080
const app = express();
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://your-frontend.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.get("/api/flights", async (req, res) => {
    try {
        let response = await axios.get("https://opensky-network.org/api/states/all");
        // let response = await fetch("https://countriesnow.space/api/v0.1/countries/positions");

        // response = await response.json();

        res.json({
            data: response.data
        });

    } catch (err) {
        console.error("Flight API Error:", err.message);
        res.status(500).json({ error: "Failed",details: err.message });
    }
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:8080");
});