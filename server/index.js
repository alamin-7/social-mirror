
const express = require('express');
const connectDB = require('./db');

const app = express();

connectDB();


app.use(express.json({ extended: false }));

app.use('/api/user', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
