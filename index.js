const fs = require('fs');
const path = require('path');

try {
  const sourceFileUrl = path.resolve(path.basename('./titles.txt'));

  const content = fs.readFileSync(sourceFileUrl, { encoding: 'utf8', flag: 'r' });

  const contentArr = content.split(',').map((line, i) => {
    line = line.replace(/(\r\n|\n|\r)/gm, "");

    return line;
  });

  const dir = './dist';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  for (let index = 0; index < contentArr.length; index++) {
    const docName = contentArr[index];
    if (docName.length > 0) fs.createWriteStream(`./dist/${docName}.docx`);
  }

} catch (error) {
  console.log(error);
}
