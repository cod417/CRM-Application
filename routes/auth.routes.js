// this file  will act as the route for authentication and autherization------------
// define the routes restendpoints the user registration
const authController = require('../controller/auth.controller');
module.exports = (app)=>{
// Post 127.0.0.1:8080/crm/api/v1/auth/sugnupv
app.post("/crm/api/v1/auth/signup",authController.signup);
}
