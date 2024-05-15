import express from "express";

const app = express();
const port = 3000;

// Get request
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
});