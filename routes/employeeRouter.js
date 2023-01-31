const express = require("express");
const router = express.Router();

const {
  getEmployee,
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controller/employeeController");

//  /getallemployees /postemployee /blogs /blog/:blogId


router.route("/employees").get(getEmployees).post(createEmployee);

router
  .route("/employees/:id")
  .get(getEmployee)
  .patch(updateEmployee)
  .delete(deleteEmployee);
// router.get("/employees", getEmployees);
// router.post("/employees", createEmployee);
// router.get("/employees/:id", getEmployee);
// router.delete("/employees/:id", deleteEmployee);
// router.patch("/employees/:id", updateEmployee);


module.exports = router;
