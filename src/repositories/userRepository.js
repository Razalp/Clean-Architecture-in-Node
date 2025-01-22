const User = require('../models/user');

class UserRepository {
  async addUser(user) {
    const newUser = new User(user);
    return await newUser.save();
  }

  async findByUsername(username) {
    return await User.findOne({ username });
  }
}

module.exports = new UserRepository();