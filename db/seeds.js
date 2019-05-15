require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const StartedProjects = require('./models/StartedProjects')
const ProjectsToStart = require('./models/ProjectsToStart')

const firstStartedProject = new StartedProjects({
    name: "firstTestStartedProject",
    rank: 2,
    info: "this is my first test started project"
})

const firstProjectToStart = new ProjectsToStart({
    name: "firstTestProjectToStart",
    priority: 1,
    info: "this is my first test project to start"
})


/* WHAT IS THIS PORTION?
*/

StartedProjects.remove({})
  .then(() => firstStartedProject.save())
  .then(()=> firstProjectToStart.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())
  /*
Now we finally have enough info to build out our API.
*/