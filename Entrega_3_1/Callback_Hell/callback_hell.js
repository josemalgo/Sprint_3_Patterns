const {
  readdir,
  readFile,
  writeFile
} = require("fs");

const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

// Read and reverse contents of text files in a directory
readdir(inbox, (error, files) => {
  console.log(inbox);
  getFilesDirectories(error, files);
} );


function getFilesDirectories(error, files) {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      writeReverseFile(file, error, data);
    });
  });
}

function writeReverseFile(file, error, data){
  if (error) return console.log("Error: File error");
  writeFile(join(outbox, file), reverseText(data), error => {
    if (error) return console.log("Error: File could not be saved!");
    console.log(`${file} was successfully saved in the outbox!`);
  });
}