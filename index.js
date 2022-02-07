const fs = require('fs');
const path = require('path');

try {
  const sourceFileUrl = path.resolve(path.basename('./titles.txt'));

  const content = fs.readFileSync(sourceFileUrl, { encoding: 'utf8', flag: 'r' });

  const contentArr = content.split(',').map((line, i) => {
    line = line.trim();

    return line;
  });

  for (let index = 0; index < contentArr.length; index++) {
    const docName = contentArr[index];
    const doc = fs.createWriteStream(`./${docName}.docx`);
    doc.write(docName);
  }


} catch (error) {
  console.log(error);
}
