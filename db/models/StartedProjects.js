//requiring connection.js as 'mongoose'
const mongoose = require('../connection')
const Schema = mongoose.Schema

const StartedProject = new Schema ({
    name: String,
    rank: Number,
    info: String
})

module.exports = mongoose.model('StartedProject', StartedProject)


