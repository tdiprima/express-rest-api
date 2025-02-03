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

Many authentication standards (such as OAuth, JWT, Bearer tokens) specify that tokens should be sent in the HTTP headers, typically using the Authorization header.

**Example:** Using headers for sending an authentication key or token

```js
fetch('https://api.example.com/data', {
    method: 'GET', // or 'POST'
    headers: {
        'Authorization': 'Bearer YOUR_AUTH_TOKEN'
    }
});
```

### Sending in Headers vs. Body

**Headers:** Preferred for authentication information because headers are specifically designed to carry metadata (like authentication details) about the HTTP request or response. Headers are processed before the body, making them a more natural fit for information that needs to be evaluated prior to processing the content.

**Body:** Typically used for the data relevant to the POST request.

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

### Licensing Notice

This project may include third-party open-source code, which remains subject to its original licenses.<br>
Attribution is provided in the source code where applicable.  

If you believe there is an issue with licensing, please **open an issue** or **contact the repository owner** for resolution.


<br>
