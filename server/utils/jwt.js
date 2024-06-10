const jwt = require('jsonwebtoken');
const secret_key = 'absbbdkjdskjfdls';

const generateToken = (playload) => {
    return jwt.sign(playload, secret_key, {expiresIn: '24h'});
};

const verifyToken = (token) =>{
    try{
        return jwt.verify(token, secret_key);
    }catch(err){
        return null;
    }
};

module.exports = {generateToken, verifyToken};