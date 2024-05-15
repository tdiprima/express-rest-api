# express-api-demo

**Start server:**

```sh
npm start
```

App runs on http://localhost:3000.

**Users:**

http://localhost:3000/users

**Get user:**

`http://localhost:3000/user/<id>`

**Add user:**

Use Thunder Client or Postman.

POST: http://localhost:3000/user

JSON Body:

```json
{
  "id": 3,
  "name": "Joe",
  "department": "BMI"
}
```

Check it: http://localhost:3000/users

**Update user:**

PUT http://localhost:3000/user

```json
{
  "id": 2,
  "name": "Jane Doe-Smith",
  "department": "Research"
}
```

**Delete user:**

DELETE http://localhost:3000/user/1

**Get departments:**

GET: http://localhost:3000/departments

## Headers

For handling sensitive information like authentication certificates or keys, the typical practice is to send them in the HTTP headers.

Here's how you can typically use headers for sending an authentication key or token:

```js
fetch('https://api.example.com/data', {
    method: 'GET', // or 'POST'
    headers: {
        'Authorization': 'Bearer YOUR_AUTH_TOKEN'
    }
});
```

## Response

`res.send(user)` sends back the user that you sent.

```js
app.post("/user", (req, res) => {
    const user = req.body;
    console.log(user);
    users.push(user);
    res.send(user);
});
```

If you do not send back a response, it'll hang, even though it's done.

So always send back a response, whether it's an error message, or a message saying that it succeeded.

<br>
