//requiring connection.js as 'mongoose'
const mongoose = require('../connection')
const Schema = mongoose.Schema

const ProjectsToStart = new Schema ({
    Name: String,
    Priority: Number,
    Info: String
})

module.exports = mongoose.model('ProjectsToStart', ProjectsToStart)
