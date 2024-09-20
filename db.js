const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const TodoSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    task: String,  
    done: { type: Boolean, default: false }  
});

const UserModel = mongoose.model('users', UserSchema);
const TodoModel = mongoose.model('todos', TodoSchema);

module.exports = {
    UserModel,
    TodoModel
};
