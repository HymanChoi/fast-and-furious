const fs = require("fs");
const drivers = require("../data/drivers.json");
const seasonInfo = require("../data/seasonInfo.json");

/**
 * 保存文件
 *
 * @param {*} path
 * @param {*} content
 * @param {*} name
 */
function saveData(path, content, name = "") {
  fs.writeFile(path, JSON.stringify(content, null, " "), (err) => {
    if (err) return console.log(err);
    console.log(`${name}数据已保存！`);
  });
}
seasonInfo.forEach((i) => {
  drivers.forEach((j) => {
    if (j.name === i.name) {
      i.driverId = j.id;
      console.log(j.name, j.id);
    }
  });
});

saveData("../data/seasonInfo.json", seasonInfo);
