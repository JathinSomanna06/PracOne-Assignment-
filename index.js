const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

const age = [
  {name: "Aaryan", total: 400},
  {name: "Moulyaa", total: 500},
  {name: "Jathin", total: 400},
  {name: "Veeresh", total: 600},
  {name: "Sumait", total: 700}
];

app.use(express.json()); 


app.post('/students/above-threshold', (req, res) => {
  const { threshold } = req.body;


  if (typeof threshold !== 'number' || threshold <= 0) {
    return res.status(400).json({ message: "Invalid threshold" });
  }


  const FilterStudents = age.filter(student => student.total > threshold);


  res.status(200).json({
    count: FilterStudents.length,
    students: FilterStudents
  });
});


app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
