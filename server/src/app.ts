import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

// declaração de dependencias para uso do https
const fs = require("fs");
const https = require("https");

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());


// declaração da constante com o caminho do certificado e da chave (validos via letscript)
const options = {
    key: fs.readFileSync(path.resolve(__dirname,'server.key')),
    cert: fs.readFileSync(path.resolve(__dirname,'server.crt'))
};


https.createServer(options, app).listen(3355);