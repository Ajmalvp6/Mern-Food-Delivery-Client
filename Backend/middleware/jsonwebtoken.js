const jwt = require('jsonwebtoken')

exports.verifytoken=(req,res,next)=>{

    const token = req.headers 

   try{ if(!token){
        return res.status(404).json({message:'No Token Provided please provide token'})
    }

    const JWTResponse =  jwt.verify(token.split(" ")[1],process.env.JWTResponse)


    req.payload = JWTResponse.user.userId

    next()}

    catch(error){
        res.status(404).json({message:"invalid or expired token"})
    }
    
}
