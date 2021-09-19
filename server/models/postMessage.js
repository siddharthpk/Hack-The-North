import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    email: String,
    title: String,
    message: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;