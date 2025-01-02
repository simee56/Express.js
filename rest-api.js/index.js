const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;

//User's information in html format
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.end(html);
})

//User's information in json format
app.get("/api/users", (req, res) => {
    return res.json(users)
});


//Finding user by id
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
});


//Creating a new account for a new user
app.post("/api/users", (req, res) => {
    return res.json({ status: "pending" })
});


//Updating inforamtion of an existing user
app.patch("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" })
});


//Deleting an user's aocount
app.delete("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" })
});

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`)
});

