import { User } from "../db/Sequelize.js"


export const findUser = (req, res) => {
    let email = req.body.email
    let pwd = req.body.pwd

    if(email){
        User.findOne({where : {email}}).then(user => {
            if(user){
                if(pwd === user.pwd){
                    res.json({msg : 'Succesfully connected !' , user})
                }else{
                    res.status(404).json({msg : `wrong password for the email ${email}`})
                }
            }else{
                res.status(404).json({msg : `there is no user with that email : ${email}`})
            }
        })
    }else{
        res.status(400).json({msg : " email address should not be empty"})
    }
}