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

app.use(express.json());

app.get("/api/ping", (req, res) => {
  const response = {
    status: "success",
    message: "Server is ready!",
  };
  res.json(response);
});

app.post("/api/registration", async (req, res) => {
  try {
    const random = Math.random();

    if (random > 0.5) {
      const response = {
        status: "success",
        message: "Ваша заявка успешно отправлена!",
      };
      res.status(200).json(response);
    } else {
      const errorResponse = {
        status: "error",
        fields: {
          inputName: req.body.name,
          inputEmail: req.body.email,
          inputTel: req.body.tel,
          inputMsg: req.body.msg,
        },
      };
      res.status(400).json(errorResponse);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
