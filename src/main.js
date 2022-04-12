import express from "express";
import { cors } from "./middleware/cors.js";
import morgan from "morgan"
import cookieParser from "cookie-parser";
import { startServer } from "./config/db.js";
import MongoStore from "connect-mongo";
import session from "express-session";

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
            mongoUrl: "mongodb+srv://Vircom_v1:Vircom_2021@vircom-v1.xzwnx.mongodb.net/Vircom_v1?retryWrites=true&w=majority",
            // autoReconnect: true,
        }),
    }),
);

// routes
app.get("/", (req, res) => {
    res.json({msg: "API's are responding well"})
})

startServer(app);