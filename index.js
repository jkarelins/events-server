const express = require("express");
const app = express();
const port = 4000;

const corsMiddleware = require("cors")();

const parserMiddleware = require("body-parser").json();
const eventRoutes = require("./models/event/router");

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use("/event", eventRoutes);

app.listen(port, () => console.log(`Events API running on port ${port}!`));
