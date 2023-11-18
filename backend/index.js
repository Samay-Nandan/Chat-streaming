require("module-alias/register");
const express = require("express");
const cors = require("cors");
const routes = require("@routes");
const { PORT, SERVER_IP } = require("@config");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () =>
  console.log(`Server running on http://${SERVER_IP}:${PORT}`)
);
