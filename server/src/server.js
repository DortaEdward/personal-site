const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const PORT = process.env.PORT || 5007;
const app = express();

app.use(cors());
app.use(morgan('dev')); 
app.use(helmet()); 

app.get('/', (req,res) => {
  res.json({
    message:'Welcome'
  })
})


app.listen(PORT, () => {
  console.log('Listening on Port:', PORT);
})