import express, { Router } from "express";
import { studentRouter1 } from "./src/route/student.route.js";
//const app = express();
const port = 3000;
const student = Router();
// app.use("/student", student);
const app = express();
app.use("/studenthandler", studentRouter1);
student.get("/", (req, res) => {
  res.send({
    Message: "i got get request",
    URL: req.baseUrl,
    Method: req.method,
  });
});
student.post("/", (req, res) => {
  res.send({
    Message: "i got post request",
    URL: req.baseUrl,
    Method: req.method,
  });
});
student.put("/", (req, res) => {
  res.send({
    Message: "i got put request",
    URL: req.baseUrl,
    Method: req.method,
  });
});
student.delete("/", (req, res) => {
  res.send({
    Message: "i got delete request",
    URL: req.baseUrl,
    Method: req.method,
  });
});
app.listen(3000, () => {
  console.log(`"its a port ${port}"`);
});
