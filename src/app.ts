import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import 'dotenv/config';

import usersRouter from './routes/users';

const app = express();

const connect : any = process.env.ATLAS_URL;
mongoose.connect(connect);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req : Request, res : Response, next : NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err : any, req : Request, res : Response, next : NextFunction): void {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error : err.message })
});

export default app;
