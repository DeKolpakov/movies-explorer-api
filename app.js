const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');

const routes = require('./routes/indexRouter');
const cors = require('./middlewares/cors');
const limiter = require('./middlewares/limiter');
const centralError = require('./middlewares/centralError');

const { logRequest, logError } = require('./middlewares/logging');

const { PORT, DBADDRES } = require('./utils/configuration');

const app = express();

mongoose.connect(DBADDRES);

app.use(helmet());
app.use(cors);
app.use(limiter);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logRequest);
app.use(routes);

app.use(logError);
app.use(errors());
app.use(centralError);

app.listen(PORT);
