const userRepository = require('../repositories/userRepository');

class UserService {
  constructor() {
    this.predefinedPassword = 'password123';
  }

  async createUser(username) {
    const user = {
      username,
      password: this.predefinedPassword,
    };
    return await userRepository.addUser(user);
  }

  async signIn(username, password) {
    const user = await userRepository.findByUsername(username);
    if (user && user.password === password) {
      return { success: true, message: 'Sign in successful' };
    }
    return { success: false, message: 'Invalid username or password' };
  }
}

module.exports = new UserService();