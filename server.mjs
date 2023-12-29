import express from 'express';
import { handler } from './.output/server/index.mjs';

const app = express();

app.use(express.static('.output/public'));
app.use(async (req, res) => {
  const encodedQueryObject = Object.entries(req.query).reduce(
    (acc, [key, value]) => {
      acc[key] = encodeURIComponent(value);
      return acc;
    },
    {}
  );

  const result = await handler({
    path: req.url,
    queryStringParameters: encodedQueryObject,
    headers: req.headers,
    httpMethod: req.method
  });
  res.writeHead(result.statusCode, result.headers);
  res.end(result.body);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on port 3000'));
