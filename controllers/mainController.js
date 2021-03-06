//Place CRUD functionalities here

/* for example, from SampleBuddy project

 genreIndex: function (req, res) {
        Genre.find().then(showGenres => {
            res.render("Genres", { showGenres })

*/
const StartedProjects = require("../db/models/StartedProjects");
const ProjectsToStart = require("../db/models/ProjectsToStart");


const mainController = {
    //first model (started projects)
    startedProjectsIndex: function (req,res) {
        StartedProjects.find().then(showStartedProjects => {
            res.send(showStartedProjects)
        })
    },

    startedProject: function (req, res) {
        StartedProjects.findById(req.params.projId).then(showStartedProject => {
            console.log("proj id", req.params.projId)
            res.send(showStartedProject)
        })
    },

    newStartedProject: function (req, res) {
        StartedProjects.create(req.body)
    },

    
    updateStartedProjectRank: function(req, res) {
        //console.log(req.params.id)
        StartedProjects.findByIdAndUpdate(req.params.projId, req.body, {new: true})
        .then(() => {
           res.send(200);
        })
    },
    
    deleteStartedProject: function (req, res) {
        StartedProjects.findByIdAndDelete(req.params.projId).then(()=>{
            res.send("DONE ")
        })
    },
    



    //second model (projects to start)

    projectsToStartIndex: function (req, res) {
        ProjectsToStart.find().then(showProjectsToStart => {
            res.send(showProjectsToStart)
        })
    },
   
    projectToStart: function (req, res) {
        ProjectsToStart.findById(req.params.projId,).then(showProjectToStart => {
            res.send(showProjectToStart)
        })

    },

    newProjectToStart: function (req, res) {
        ProjectsToStart.create(req.body)
        //.then(() => { res.redirect("/") })
    },


    // app.delete('/api/projectsToStart/:projId', mainController.deleteProjectToStart)
    deleteProjectToStart: function (req, res) {
        ProjectsToStart.findByIdAndDelete(req.params.projId).then(()=>{
            res.send("DONE ")
        })
    }





}

module.exports = mainController
