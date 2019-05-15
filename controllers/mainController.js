//Place CRUD functionalities here

/* for example, from SampleBuddy project

 genreIndex: function (req, res) {
        Genre.find().then(showGenres => {
            res.render("Genres", { showGenres })

*/
const StartedProjects = require("../db/models/StartedProjects");
const ProjectsToStart = require("../db/models/ProjectsToStart");


const mainController = {
    startedProjectsIndex: function (req,res) {
        StartedProjects.find().then(showStartedProjects => {
            res.send(showStartedProjects)
        })
    },

    projectsToStartIndex: function (req, res) {
        ProjectsToStart.find().then(showProjectsToStart => {
            res.send(showProjectsToStart)
        })
    },

    startedProject: function (req, res) {
        StartedProjects.findById(req.params.projId).then(showStartedProject => {
            console.log("proj id", req.params.projId)
            res.send(showStartedProject)
        })
    },

    projectToStart: function (req, res) {
        ProjectsToStart.findById(req.params.projId).then(showProjectToStart => {
            res.send(showProjectToStart)
        })

    }




}

module.exports = mainController
