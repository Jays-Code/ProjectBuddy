//requiring connection.js as 'mongoose'
const mongoose = require('../connection')
const Schema = mongoose.Schema

const StartedProject = new Schema ({
    Name: String,
    Rank: Number,
    Info: String
})

module.exports = mongoose.model('StartedProject', StartedProject)


