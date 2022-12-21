import { check, validationResult } from 'express-validator'

const manageErrors = (cb) => (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) return next()
  cb(errors.array(), req, res)
}

//login validation
export const loginUserValidation = [
  check('email').isEmail().withMessage("'email' is missing or is invalid"),
  check('password')
    .notEmpty()
    .withMessage("'password' is empty")
    .isLength({ min: 6 })
    .withMessage("'password' must have atleast 6 characters"),
  manageErrors((error, req, res) => res.status(400).json({ error })),
]

//signup validation
export const signUpUserValidation = [
  check('email').isEmail().withMessage("'email' is missing or is invalid"),
  check('firstName')
    .trim()
    .notEmpty()
    .withMessage("'firstName' is empty")
    .escape(),
  check('lastName')
    .trim()
    .notEmpty()
    .withMessage("'lastName' is empty")
    .escape(),
  check('password')
    .notEmpty()
    .withMessage("'password' is empty")
    .isLength({ min: 6 })
    .withMessage("'password' must have atleast 6 characters"),
  check('contactNumber')
    .isMobilePhone()
    .withMessage('Invalid contact number!')
    .notEmpty()
    .withMessage("'contactNumber' is empty")
    .isLength({ min: 10, max: 10 })
    .withMessage('Invalid contact number!'),
  manageErrors((error, req, res) => res.status(400).json({ error })),
]

//address validation
export const addressValidation = [
  check('city').trim().notEmpty().withMessage("'city' is empty").escape(),
  check('name').trim().notEmpty().withMessage("'name' is empty").escape(),
  check('state').trim().notEmpty().withMessage("'state' is empty").escape(),
  check('street').trim().notEmpty().withMessage("'street' is empty").escape(),
  check('contactNumber')
    .isMobilePhone()
    .withMessage('Invalid contact number!')
    .notEmpty()
    .withMessage("'contactNumber' is empty"),
  check('zipcode')
    .notEmpty()
    .withMessage("'zipcode' is empty")
    .isLength({ min: 5, max: 6 })
    .withMessage('Invalid zipcode!'),
  manageErrors((error, req, res) => res.status(400).json({ error })),
]
