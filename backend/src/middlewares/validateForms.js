const Joi = require('joi');

const validateEntriesForm = (data) =>
  Joi.object({
    DataCad: Joi.string().min(10).max(10).required(),
    Cargo: Joi.string().min(3).required(),
    CPF: Joi.string().min(11).max(11).required(),
    Nome: Joi.string().min(5).required(),
    UfNasc: Joi.string().min(2).max(2).required(),
    Salario: Joi.decimal(6, 2).min(1).required(),
    Status: Joi.string().min(3).required(),
  }).validate(data);

const validateForm = async (req, res, next) => {
  const [data] = req.body;
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