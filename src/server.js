import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';

const server = express();

mongoose.connect(
  'mongodb+srv://oministack:natanael1997@cluster0-gmth0.mongodb.net/Semana10?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// server.use(cors);
server.use(express.json());
server.use(routes);

server.listen(3000, () => {
  console.log('online port 3000');
});
