const express = require("express");
const cors = require("cors");
const app = express();
const port = 9090;

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.get("/api/ping", (req, res) => {
  const response = {
    status: "succsess",
    message: "Server is ready!",
  };
  res.send(JSON.stringify(response));
});

app.post("/api/registration", (req, res) => {
  const random = Math.random();

  if (random > 0.5) {
    const response = {
      status: "success",
      message: "Server response!",
    };
    res.status(200).send(JSON.stringify(response));
  } else {
    const errorResponse = {
      status: "error",
      message: "Server error!",
    };
    res.status(500).send(JSON.stringify(errorResponse));
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
