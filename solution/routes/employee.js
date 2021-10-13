const router = require('express').Router();
const EmployeeModel = require('../models/Employee')

router.post('/', async function(req, res, next) {

  try {
    const {firstName, lastName, email} = req.body

    if(!firstName || !lastName || !email){  

      return res.json(
        {
          error: true,
          message: "Empty data"
        }
      )
    }


    const insertedEmployee = await EmployeeModel.create(req.body)

    res.json(insertedEmployee)

  } catch (err) {
    
    return res.json(
      {
        error: true,
        message: err.message,
        errorObj: err
      }
    )
  }

});


//search function
router.get('/', async function(req, res, next) {

  try {
    const {firstName, lastName, email} = req.query

    const filterObj = {}

    if (firstName) {
      filterObj.firstName = firstName
    }

    if (lastName) {
      filterObj.lastName = lastName
    }

    if (email) {
      filterObj.email = email
    }

    const employeeList = await EmployeeModel.find(filterObj).sort({ firstName: -1, email: -1 }) //-1 desc | 1 for asc

    res.json(employeeList)


  } catch (err) {
    
    return res.json(
      {
        error: true,
        message: err.message,
        errorObj: err
      }
    )
  }

});


module.exports = router;
