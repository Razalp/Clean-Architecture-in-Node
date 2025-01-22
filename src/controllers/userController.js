const userService = require('../services/userService');

class UserController {
  async createUser(req, res) {
    const { username } = req.body;
    try {
      const user = await userService.createUser(username);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async signIn(req, res) {
    const { username, password } = req.body;
    try {
      const result = await userService.signIn(username, password);
      if (result.success) {
        res.status(200).json(result);
      } else {
        res.status(401).json(result);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;