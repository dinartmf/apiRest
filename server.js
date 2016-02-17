import express from 'express';
import consign from 'consign';

const app = express();

consign()
    .include('libs/config.js')
    .include('database.js')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);