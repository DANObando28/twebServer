const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    idUsuario:{
        type: String
    },
    nombre: {
        type: String
    },
    rol: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
   },
   saltSecret: String
});

//eventos
userSchema.pre( 'save', function(next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

//metodos
userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function() {
    return jwt.sign({ _id: this._id, rol: this.rol },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
}

mongoose.model('User', userSchema);
