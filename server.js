import express from "express";

const app = express();
const port = 3000;

const users = [
    {
        id: 1,
        name: "John",
        department: "Engineering"
    },
    {
        id: 2,
        name: "Jane",
        department: "Marketing"
    }
];

// Get request
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/user/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
});