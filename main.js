const fs = require('fs');

function setToTeacher(){
  let username = document.getElementById("textfield1).value;
  let password = document.getElementById("textfield2).value;
  let currentTeacher = username + ";" + password;
}
fs.readFile('teachers.txt', 'utf8', (err, data) => {
  if (err){
    console.error('Error reading the file:',err);
    return;
  }
  const updatedContent = data + newLine + CurrentTeacher;

  fs.writeFile('teachers.txt', updatedContent, 'utf8', (err) =>{
     if (err){
      console.error('Error writing to the file:',err);
      return;
  }
    console.log('String added to  the file successfully!');
  });
});
