require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const StartedProjects = require('./models/StartedProjects')
const ProjectsToStart = require('./models/ProjectsToStart')

const firstStartedProject = new StartedProjects({
    name: "firstTestStartedProject",
    rank: 1,
    info: "this is my first test started project"
})

const secondStartedProject = new StartedProjects({
    name: "secondTestStartedProject",
    rank: 2,
    info: "this is my second test started project"
})



const firstProjectToStart = new ProjectsToStart({
    name: "firstTestProjectToStart",
    priority: 2,
    info: "this is my first test project to start"
})

const secondProjectToStart = new ProjectsToStart({
    name: "secondTestProjectToStart",
    priority: 3,
    info: "this is my second test project to start"
})


/* WHAT IS THIS PORTION?
*/

StartedProjects.remove({})
    .then(() => firstStartedProject.save())
    .then(() => secondStartedProject.save())
    .then(() => firstProjectToStart.save())
    .then(() => secondProjectToStart.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())
  /*
Now we finally have enough info to build out our API.
*/