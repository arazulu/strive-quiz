const db = require("../models/model.js");

const userController = {};

userController.createUser = (req, res, next) => {
  //deconstruct username and password from request body
  let { answers } = req.body;

  const userQuery = {
    text: `INSERT INTO "user"
        (q1,q2,q3,q4,q5)
        VALUES
        ($1, $2, $3, $4, $5)`,
    values: [...answers],
  };
  db.query(userQuery)
    .then((user) => {
      /*this console is only for debugging*/
      console.log("this is user res", user);
      res.locals.user = user.rows[0];
      return next();
    })
    .catch((err) => {
      return next(`Error logging in: ${err}`);
    });
};

module.exports = userController;
