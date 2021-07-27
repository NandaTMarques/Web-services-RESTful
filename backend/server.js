const express = require('express');
const cors = require('cors');
require('dotenv').config();

const errorMiddleware = require('./src/middlewares/errorMiddleware');
const employeesRouter = require('./src/routes/employees');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use(employeesRouter);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});