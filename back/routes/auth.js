const authService = require("../services/authService");
const userService = require("../services/userService");

module.exports = (app) => {
  app.post("/sing-up", (req, res) => {
    let { name, email, password, surname } = req.body;
    try {
      let { user, token } = authService.singUp(email, password, name, surname);
      console.log(user);
      res.json({ user, token }).status(200).end();
    } catch (err) {
      res.status(403)
        .json({
          error: "SingUp error",
        })
    }
  });

  app.post("/login", async (req, res) => {
    let { email, password } = req.body;
    console.log(req.body)
    try {
      let { user, token,refreshToken } = await authService.login(email, password);
      res.json({ user, token,refreshToken }).status(200).end();
    } catch (err) {
      res.json({
        error: "Login or password incorrect"
      }).end();
    }
  });

  app.post("/refresh", async (req,res) =>{
    
    let {refreshToken} = req.body;
    console.log(refreshToken);
    try{
    const result = await authService.refreshToken(refreshToken);
    res.status(200).json(result);
    }
    catch(err){
      console.log(err);
      res.status(403).json({
        error: "Refresh failed"
      })
    }
  })

  app.get("/get-user" , (req,res)=>{
    const token  = req.headers['Authorization'];
  })
  
};
