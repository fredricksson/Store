const mongoose = require('../database')
var bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    stories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story'
    }]
})
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})
const User = mongoose.model('User', UserSchema)

module.exports = User