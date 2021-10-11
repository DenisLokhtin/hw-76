const fs = require("fs");

const file = './db.json';
let data = [];

module.exports = {
    init() {
      try {
          const fileContents = fs.readFileSync(file);
          data = JSON.parse(fileContents);
      } catch (e) {
          data = [];
      }
    },
    save() {
        fs.writeFileSync(file, JSON.stringify(data))
    },
    getItems() {
        return data
    },
    addItem(item) {
        data.push(item)
        this.save()
    },
};