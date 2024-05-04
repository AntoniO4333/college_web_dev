const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 777; // Порт серва
const filePath = 'lab4/file.txt';


app.use(bodyParser.text());

app.get('/', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Ошибка при чтении файла: ' + err.message);
      return;
    }
    res.send(data);
  });
}); 

app.post('/', (req, res) => {
  const dataToAppend = req.body;
  fs.appendFile(filePath, dataToAppend, (err) => {
    if (err) {
      res.status(500).send('Ошибка при записи в файл: ' + err.message);
      return;
    }
    res.send('Данные успешно добавлены в файл');
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
