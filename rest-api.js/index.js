const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;

app.get("/users", (req,res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.end(html);
})

app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ===id );
    return res.json(user)
});

app.get("/api/users/:id", (req,res) => {
    return res.json(users)
});



app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`)
});