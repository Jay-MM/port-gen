import fs from 'fs';
import inquirer from 'inquirer';
import generatehtml from './generatehtml.js';



inquirer.prompt([
  { 
    type: "input",
    name:"name",
    message:"What is your name?",
  },
  { 
    type: "input",
    name:"location",
    message:"What is your location?",
  },
  { 
    type: "input",
    name:"bio",
    message:"Tell me a about yourself",
  },
  { 
    type: "input",
    name:"email",
    message:"What is your e-mail?",
  },
  { 
    type: "input",
    name:"linkedin",
    message:"What is your LinkedIn profile sub-domain?",
  },
  { 
    type: "input",
    name:"github",
    message:"What is your github user name?",
  },
  
  { 
    type: "input",
    name:"img",
    message:"What is the name of the img file you would like to  use? \n(Make sure that the file is inside an 'assets' directory in the root of your project. \nInclude the type of file(e.g: png, jpeg..etc..)",
  },
  

])
.then( answers => {
  console.log(answers)

  // generate html string
  const html = generatehtml(answers)

  // write file to system

  fs.writeFile("./portfolio.html", html, err => {
    if (err) throw err
    console.log('html file generated successfully!')
  } )

  
})
.catch( err => console.log(err))

