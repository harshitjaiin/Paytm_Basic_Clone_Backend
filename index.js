// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
app.use(express.json());

app.use(cors());
// const corsOptions = {
//     origin: 'https://paytm-basic-clone.vercel.app',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));

// app.options('*', cors(corsOptions));

app.use(rootRouter);

app.listen(3000);