const UserModel = require("../modals/user");

const registerNewUser = async (request, response) => {
  const data = await request.body;
//   response.send(" hello , sandeep how are you");
const user =  new UserModel(data) 
user.save()
//   const findUser= await UserModel()
response.status(200).send(user)
};
module.exports = { registerNewUser };
