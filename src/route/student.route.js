import express from "express";
import { get, post,put,delete1 } from "../controller/student.controller.js";
export const studentRouter1 = express.Router();

studentRouter1.get("/", get);

studentRouter1.post("/", post);

studentRouter1.put("/", put);

studentRouter1.delete("/", delete1);
