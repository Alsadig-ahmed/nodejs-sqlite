const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000 ;
const quotesRouter = require('./routes/quotes');

app.use(express.json());
app.use(express.urlencoded({extended:true})) // this is to make 



// static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/port', (req, res) => {
  res.json({message: `alive Example app listening on port:${port}`});
});
app.use('/quotes', quotesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
