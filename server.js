const express = require('express');
const app = express();

app.use(express.json());

//app.use(express.static(__dirname + '/client/build/'));

/*app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})*/

//ROUTES

const mainController = require('./controllers/mainController')



app.get('/api', (req, res) => {
    res.send('Hello world!')
})
//app.get('/startedProjects', (req, res) => {
    //res.send('Started Projects component page')
app.get('/api/startedProjects', mainController.startedProjectsIndex);
    
app.get('/api/startedProjects/:projId', (req, res) => {
    res.send('Single Started Product component page')
})

app.get('/api/projectsToStart', mainController.projectsToStartIndex);

app.get('/api/projectsToStart/:projId', (req, res) => {
    res.send('Project to Start component page')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Connected on port" + PORT);
})
/*

<Route path='projectsToStart/:projId' component={ProjToStartComp} />
*/

  //ProjectsToStartComp page