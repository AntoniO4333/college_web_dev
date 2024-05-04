const fs = require('fs');
const path = './lab4/file.txt'; // путь к файлу

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err);
    return;
  }
  // Инвертируем
  const reversedData = data.split('').reverse().join('');
  // Записываем обратно в файл
  fs.writeFile(path, reversedData, (err) => {
    if (err) {
      console.error('Ошибка при записи файла:', err);
    } else {
      console.log('Файл успешно перезаписан');
    }
  });
});
