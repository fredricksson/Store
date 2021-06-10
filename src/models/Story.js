const mongoose = require('../database')

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    },
    is_favourite: {
        type: Boolean,
        default: false
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

})

const Story = mongoose.model('Story', StorySchema)
module.exports = Story