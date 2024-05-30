
const express = require('express');
const connectDB = require('./db');

const app = express();

connectDB();


app.use(express.json({ extended: false }));

app.use('/routes/sample', require('./routes/sample'));

app.get('/', (req, res) => {
  res.send('API is running test');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
