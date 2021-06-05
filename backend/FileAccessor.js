module.exports = {
  readFileJson: (path) => {
    const fs = require('fs');
    const rawdata = fs.readFileSync(path);
    return JSON.parse(rawdata);
  },
  writeFileJson: (path, data) => {
    const fs = require('fs');
    fs.writeFileSync(path, data);
    return true;
  },
};
