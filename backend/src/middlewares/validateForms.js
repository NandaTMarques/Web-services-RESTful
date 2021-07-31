const Joi = require('joi');

const validateEntriesForm = (data) =>
  Joi.object({
    Cargo: Joi.string().min(5).required(),
    Cpf: Joi.string().length(11).required(),
    Nome: Joi.string().min(5).required(),
    UfNasc: Joi.string().min(2).max(2).required(),
    Salario: Joi.number().min(1).required(),
  }).validate(data);

const validateForm = (req, res, next) => {
  const data = req.body;
  console.log(req)
  const { error } = validateEntriesForm(data);
  try {
    if (error) {
      const orderInfoResponse = { code: 400, message: error.details[0].message };
      throw orderInfoResponse;
    }
    next();
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports =  validateForm;
