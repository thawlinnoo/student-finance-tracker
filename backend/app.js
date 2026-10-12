import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); //to let browsers to allow frontend to get access responses from backends even tho the ports origins are different..
app.use(express.json()); //convert incoming json body into a Javascript value that can use as "req.body"

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

export default app;


