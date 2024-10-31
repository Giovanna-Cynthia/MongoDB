const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    }
    //para colocar o horario
}, { timestamps: true });

//Criando o modelo user dentro do mongodb 
module.exports = mongoose.model('User', userSchema);