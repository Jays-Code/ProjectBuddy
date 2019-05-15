//requiring connection.js as 'mongoose'
const mongoose = require('../connection')
const Schema = mongoose.Schema

const ProjectsToStart = new Schema ({
    name: String,
    priority: Number,
    info: String
})

module.exports = mongoose.model('ProjectsToStart', ProjectsToStart)
