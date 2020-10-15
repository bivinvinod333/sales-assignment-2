# SALES-ASSIGNMENT-2


## Installation


```bash
npm install -g typescript
npm i 
npm start
```

## Usage

### Login a user 
Method: POST 
Url: http://localhost:3000/api/v1/users/login 
BODY
```javascript
{
  "userName": "bivin",
  "password": "bivin",
}
```

### Add a retailer 
Method: POST 
Header: Authorization Bearer {token-from-login}
Url: http://localhost:3000/api/v1/users/retailer 
BODY
```javascript
{
  "name": "bivin",
  "checkIn": "10:15AM",
  "checkOut": "10:15AM",
  "date": "2020-10-15T16:26:24.102Z"
}
```