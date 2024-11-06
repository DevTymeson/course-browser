const express = require("express");
const cors = require("cors");
const app = express();
const sql = require("mssql");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
    driver: "tedious",
};

sql.connect(dbConfig)
    .then(() => {
        console.log("Connected to SQL Server");
    })
    .catch((err) => {
        console.error("Database connection failed: ", err);
    });

app.get("/classes", async (req, res) => {
    try {
        const result = await sql.query(
            "SELECT * FROM Classes ORDER BY Code ASC"
        );
        res.json(result.recordset);
    } catch (err) {
        console.error(`Error fetching data: ${err}`);
        res.status(500).send("Server error");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
