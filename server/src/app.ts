import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

const fs = require("fs");
const https = require("https");

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());


const options = {
    key: fs.readFileSync(path.resolve(__dirname,'server.key')),
    cert: fs.readFileSync(path.resolve(__dirname,'server.crt'))
  };


  https.createServer(options, app).listen(3355);