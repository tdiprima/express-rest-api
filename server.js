import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json()); // transforms json input to object that we can work with

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

// GET requests
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

app.get("/departments", (req, res) => {
    const departments = users.map(user => user.department);
    const uniqueDepartments = [...new Set(departments)];

    if (uniqueDepartments.length === 0) {
        res.status(404).send({
            data: { message: "No departments found" }
        });
    } else {
        res.status(200).send({
            data: { departments: uniqueDepartments, length: uniqueDepartments.length }
        });
    }
});

// POST
app.post("/user", (req, res) => {
    const user = req.body;
    console.log(user);
    users.push(user);
    res.send(user);
});

// PUT
app.put("/user", (req, res) => {
    const user = req.body;
    const id = user.id;
    const index = users.findIndex(u => u.id === id);

    if (index !== -1) {
        users[index] = user; // Update the user
        res.send(user);
    } else {
        res.status(404).send({ message: "User not found" });
    }
});

// DELETE
app.delete("/user/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        users.splice(index, 1); // Remove the user from the array
        res.status(200).send({
            message: "User deleted successfully"
        });
    } else {
        res.status(404).send({
            message: "User not found"
        });
    }
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
});