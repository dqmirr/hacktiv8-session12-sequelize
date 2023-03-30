const {
  User,
  Photo
} = require("../models")

class UserController {
  static async getAllUsers(req, res) {
    try {
      const data = await User.findAll({
        include: [
          {
            model: Photo
          }
        ]
      })

      res.status(200).json(data)
    } catch (error) {
      res.status(error?.code || 500).json(error)
    }
  }
}

module.exports = UserController