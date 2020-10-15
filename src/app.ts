import { NextFunction, Request, Response } from "express";

import createError from "http-errors";

import express from "express";

import logger from "morgan";

import cookieParser from "cookie-parser";

import path from "path";

import indexRouter from "./routes";


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/', indexRouter);


// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    const message = err.message;
    const status = err.status;
    res.status(status || 500).send({ message })
});
export default app;
