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
    }
}

module.exports = mainController
