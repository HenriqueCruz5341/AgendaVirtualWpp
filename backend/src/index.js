import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import contactsRoute from './routes/contact.js';

const app = express();

connect(process.env.DB_CONNECT);

app.use(json());
app.use(cors());

app.use('/contacts', contactsRoute);

app.listen(process.env.PORT || 3333, () => console.log('Server running...'));
