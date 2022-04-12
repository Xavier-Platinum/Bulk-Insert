import express from "express";
import { cors } from "./middleware/cors";
import morgan from "morgan"
import cookieParser from "cookie-parser";
import { startServer } from "./config/db";
import MongoStore from "connect-mongo";

// Routes

const app = express();

// middlewares
app.use("*", cors);
app.use(morgan("dev"));
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '50mb','extended': 'true'}));
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cookieParser());
app.use(
    session({
        secret: "process.env.SESSION_SECRET",
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 1209600000,
        },
        store: MongoStore.create({
            mongoUrl: `${process.env.DB}`,
            // autoReconnect: true,
        }),
    }),
);

// routes
app.get("/", (req, res) => {
    res.json({msg: "API's are responding well"})
})

startServer(app);