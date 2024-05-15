# hat-express-demo

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

Then check it in http://localhost:3000/users

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

Get departments:

GET: http://localhost:3000/departments

<br>
