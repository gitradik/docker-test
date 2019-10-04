import http from 'http';
import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import errorHandler from './server/utils/errors/errorHandler';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);
app.use('/static', express.static(__dirname + '/server/public'));

const httpServer = http.createServer(app);

httpServer.listen(PORT);


