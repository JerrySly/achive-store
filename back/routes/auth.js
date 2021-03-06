const authService = require("../services/authService");


module.exports = (app) =>{
    app.post('/sing-up', (req,res)=>{
       let {name,email,password,surname} =  req.body;
       let {user,token} = authService.registration(email,password,name,surname);
       console.log(user);
       res.json({user,token}).status(200).end()     
    })

    app.post('/login', async (req,res)=>{
        let {email,password} = req.body;
        
        let {user,token} = await authService.login(email,password);
        console.log(user)
        res.json({user,token}).status(200).end() 
    })
}