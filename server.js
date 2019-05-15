const express = require('express');
const app = express();

app.use(express.json());

//app.use(express.static(__dirname + '/client/build/'));

/*app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})*/

//ROUTES

const mainController = require('./controllers/controller')

app.get('/', (req, res) => {
    res.send('Hello world!')
})
app.get('/startedProjects', (req, res) => {
    res.send('Started Projects component page')
});
app.get('/startedProjects/:projId', (req, res) => {
    res.send('Single Started Product component page')
})

app.get('/projectsToStart', (req, res) => {
    res.send('Projects to Start component page')
})

app.get('/projectsToStart/:projId', (req, res) => {
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