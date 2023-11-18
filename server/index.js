import express from 'express';
import path from 'path';

const app = express();

const __dirname = path.resolve();

app.listen(3000, () => {
  console.log(`connect to port 3000`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'dist', 'index.html'));
})
