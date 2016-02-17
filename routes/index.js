import express from 'express';
import consign from 'consign';

const app = express();

consign()
    .include('libs/config.js')
    .then('database.js')
    .then('auth.js')
    ,then('libs/middleware.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);