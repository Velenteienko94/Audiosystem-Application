import express from 'express';
import cors from 'cors';
import fs from 'fs';
// rest of the code remains same
const app = express();
const PORT = 8000;

const posts = [{id: '213ewedhadha', title: 'SASI'}, {id: '2adgadvhaga', title: 'LOH'}];

app.use(cors());

app.get('/', (req, res) => res.send(JSON.stringify('/posts')));

app.get('/posts', (req, res) => {
  setTimeout(() => res.send(JSON.stringify(posts)), 1000);
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});