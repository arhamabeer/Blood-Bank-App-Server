const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    email: {type: String},
    password: {type: String}
});

const authModel = mongoose.model('authentication', authSchema)

module.exports = authModel;

