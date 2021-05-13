

const { body, validationResult } = require('express-validator');

const registerRules = () => [
    body('name', 'Name is required').notEmpty(),
    body('phone', 'phone is required').notEmpty(),
    body('email', 'email is required').isEmail(),
    body('password', 'password must contain 8 characters').isLength({
        min: 8
    }),

];

const loginRules = () => [
    body('email', 'email is required').isEmail(),
    body('password', 'password must contain 8 characters').isLength({
        min: 8
    }),
];

const typeRules = () => [
    body('name', 'Name is required').notEmpty(),
    body('description', 'description is required').notEmpty()
];

const msgRules = () => [
    body('title', 'title is required').notEmpty(),
    body('desc', 'description is required').notEmpty()
];

const subventionRules = () => [
    body('name', 'Name is required').notEmpty(),
    body('descr', 'description is required').notEmpty(),
    body(' imgUrl', 'image Url is required').notEmpty()
   
];


const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        return res.status(400).json({
            errors: errors.array().map((el) => ({
                msg: el.msg,
            })),
        });
    }
    next();
};
module.exports = { registerRules, loginRules, validator, typeRules , msgRules , subventionRules};

