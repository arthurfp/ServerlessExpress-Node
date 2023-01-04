const express = require('express');

const app = express();

// Routes
app.get('/user', (req, res) => {
  res.send([
    {
      title: 'serverless framework',
      link: 'https://serverless.com',
    },
  ]);
});

app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    id,
    title: 'serverless framework',
    link: 'https://serverless.com',
  });
});

app.get('/404', (req, res) => {
  res.status(404).send('Not found');
});

app.get('/500', (req, res) => {
  res.status(500).send('Server Error');
});

// Error handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;
