const express = require("express");
const app = express();

function checkAuthHeader(req, res, next) {
  if (!req.headers.auth) {
    return res.status(401).json({
      Error: {
        errcode: "401 - unauthorized access",
        errormessage: "Login to access the requested resources",
      },
    });
  }
  next();
}

app.get("/getNumber", (req, res) => {
  const phoneNumber = "9665772661";
  res.json({ phoneNumber });
});

app.get("/getName", checkAuthHeader, (req, res) => {
  const name = "Adi";
  res.json({ name });
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
