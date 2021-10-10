const fs = require("fs");

module.exports = {
  save(req, date) {
    fs.writeFile(`./messages/${date}.txt`, JSON.stringify(req), (err => {
      if (err) {
        console.log(err)
      } else {
        console.log('file was saved')
      }
    }));
  },
  read(path) {
    const messages = [];
    const fileNames = fs.readdirSync(path, 'utf-8');
    const lastFiles = fileNames.slice(-5);
    lastFiles.forEach(elem => {
      const data = fs.readFileSync(path + '/' + elem, 'utf-8')
      console.log(data)
      messages.push(JSON.parse(data));
    });
    return messages
  },
};