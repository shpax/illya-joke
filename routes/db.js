const fs = require('fs');

function getData() {
  let data;
  try {
    data = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
  } catch (e) {
    data = {
      text: 'столько раз Саша могла бы позвонить тебе, не знай она где ты сейчас',
      counter: 0,
    };
    setData(data);
  }
  return data;
}

function setData(obj) {
  fs.writeFileSync('./db.json', JSON.stringify(obj))
}

module.exports = {
  getData,
  setData,
};