import {getStudent,postStudent,putStudent,deleteStudent} from "../services/student.service.js";

export const get = async (req, res) => {
  try {
    const response = await getStudent(req);
    res.send({
      Message: response,
      Url: req.baseUrl,
      Method: req.method,
    });
  } catch (error) {
    res.send({
      Message: "unable to process",
      Url: req.baseUrl,
      Method: req.method,
    });
  }
};

export const post = async (req, res) => {
  try {
    let Response = await postStudent(req);
    res.send({
      Message: Response,
      Url: req.baseUrl,
      Method: req.method,
    });
  } catch (error) {
    console.log(error);
    res.send({
      Message: error,
      Url: req.baseUrl,
      Method: req.method,
    });
  }
};

export const put = async (req, res) => {
  try {
    let Response = await putStudent(req);
    res.send({
      Message: Response,
      Url: req.baseUrl,
      Method: req.method,
    });
  } catch (error) {
    console.log(error);
    res.send({
      Message: error,
      Url: req.baseUrl,
      Method: req.method,
    });
  }
};

export const delete1 = async (req, res) => {
  try {
    let Response = await deleteStudent(req);
    res.send({
      Message: Response,
      Url: req.baseUrl,
      Method: req.method,
    });
  } catch (error) {
    console.log(error);
    res.send({
      Message: error,
      Url: req.baseUrl,
      Method: req.method,
    });
  }
};
