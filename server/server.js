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
  const phoneNo = "9665772661";
  res.json({ phoneNo });
});

app.get("/getName", checkAuthHeader, (req, res) => {
  const name = "Adi";
  res.json({ name });
});

app.use(checkAuthHeader);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
