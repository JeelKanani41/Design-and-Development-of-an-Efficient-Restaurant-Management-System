const order =require('../../models/order')
const session = require('express-session')
function homeController(){
      return{
           async index(req,res){
            //    const user=await Customer.findOne({user:session.Cookie.user})
                  // let Isorder = await order.findOne({customerId:"ObjectId(\""+req.session.passport.user+"\")"})
                  // console.log(Isorder);
                  console.log("Customer");
                  res.render('home')
                  console.log("Customers");
           }
      }
}
module.exports=homeController