// server.js (Node.js + Express example)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Example in-memory data
let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.post('/api/login', (req, res) => {
  // Add logic to authenticate user
  res.json({ message: 'Login successful' });
});

app.post('/api/signup', (req, res) => {
  // Add logic to create a new user
  res.json({ message: 'Signup successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
