import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import 'dotenv/config';

import usersRouter from './routes/users';

import { UserModel } from './model/userModel';
import { tokenModel } from './model/tokenModel';
import { productModel } from './model/productModel';

import UserService from './service/User.service';
import ProductService from './service/Product.service';
import AuthService from './service/Auth.service';

const app = express();

interface IAppLocals {
  model : {
    users : typeof UserModel;
    products : typeof productModel;
    token : typeof tokenModel;
  };

  services : {
    users : UserService;
    products : ProductService;
    auth : AuthService;
  };
}

declare global {
  namespace Express {
    interface Locals extends IAppLocals {}
  }
}

app.locals.model = {
  users : UserModel,
  products : productModel,
  token : tokenModel,
}

app.locals.services = {
  users : new UserService(app.locals.model),
  products : new ProductService(app.locals.model),
  auth : new AuthService(app.locals.model),
}

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
