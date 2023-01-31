const Employees = require("../models/employees");

// res.render('index', {})
//get all employees - /employees
const getEmployees = (req, res) => {
  Employees.find()
    .then((result) => {
      // res.status(200).json({ data });
      res.status(200).render("index", { employees: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
//_id findById
//get a single employee /employees/:id - req.params
const getEmployee = (req, res) => {
  const { id } = req.params;
  Employees.findById({ _id: id })
    .then((data) => {
      //res.status(200).json({ data });
      res.status(200).render("details", { employee: data });
    })
    .catch((err) => console.log(err));
};

//create a new employee /employees - req.body
//name, role, age - req.body
const createEmployee = (req, res) => {
  const { name, role, age } = req.body;
  console.log(req.body);
  const employee = new Employees(req.body);
  employee
    .save()
    .then((data) => {
      // res.status(201).json({ msg: "Employee created", data });
      res.redirect("/employees");
    })
    .catch((err) => {
      console.log(err);
    });
};

// update an  employee /employees/:id - params, body
const updateEmployee = (req, res) => {
  const { id } = req.params;
  //req.body
  Employees.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((data) => {
      res.status(200).json({ msg: "employee updated", data });
    })
    .catch((err) => console.log(err));
};

// delete an employee /employees/:id params
//findbyIdandDelete
const deleteEmployee = (req, res) => {
  const { id } = req.params;
  Employees.findByIdAndDelete({ _id: id })
    .then((data) => {
      res.status(200).json({ redirect: "/employees" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getEmployees,
  getEmployee,
  deleteEmployee,
  updateEmployee,
  createEmployee,
};
