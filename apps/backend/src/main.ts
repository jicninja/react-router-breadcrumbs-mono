import express from 'express';
import cors from 'cors';

import { generateLabels } from '@rr/shared';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());

app.get('/api/labels', async (req, res) => {
  //add Sleeper to simulate proceess
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.send({ labels: generateLabels(3) });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
