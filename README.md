# Nitro aws-lambda preset query decoding issue

The problem is that when using aws-lambda preset, the handler function doesn't decode query values that is accepts as arguments.

## How to reproduce
- Install dependencies: `npm ci`
- Run the app: `npm start`
- Go to http://localhost:3000/?email=email%40mail.com
- In terminal you will see that the query value is not decoded: `QUERY { email: 'email%40mail.com' }`
