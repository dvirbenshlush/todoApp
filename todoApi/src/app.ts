
require("dotenv").config();
import http from 'http';
import cors from 'cors';
import express from "express";
import { router } from './routes';
import connectDB from './db/mongo';
import { setupSwagger } from './../swagger';
import { setupSocket } from './services/socket';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// setupSwagger(app);

connectDB();
app.use(router);
setupSocket(server);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});