const {
  Photo,
  User
} = require("../models")

class PhotoController {
  static async getPhotos(req, res) {
    try {
      const data = await Photo.findAll({
        include: [
          {
            model: User
          }
        ]
      })

      res.status(200).json(data)
    } catch (error) {
      res.status(error?.code || 500).json(error)
    }
  } 

  static async getPhotoById(req, res) {
    try {

      const { id } = req.params

      const data = await Photo.findOne({
        where: {
          id
        }
      })

      res.status(200).json(data)
    } catch (error) {
      res.status(error?.code || 500).json(error)
    }
  }

  static async createPhoto(req, res) {
    try {

      const { 
        title,
        caption,
        image_url
      } = req.body

      const result = await Photo.create({
        title,
        caption,
        image_url
      })
     
      res.status(201).json(result)
    } catch (error) {
      res.status(error?.code || 500).json(error)
    }
  }

  static async updatePhotoById(req, res) {
    try {

      const { id } = req.params
      const { 
        title,
        caption,
        image_url
      } = req.body

      const result = await Photo.update({
        title,
        caption,
        image_url
      }, {
        where: {
          id
        },
        returning: true
      })
     
      res.status(201).json(result)
    } catch (error) {
      res.status(error?.code || 500).json(error)
    }
  }

  static async deletePhotoById(req, res) {
    try {

      const { id } = req.params
      
      const result = await Photo.destroy({
        where: {
          id
        }
      })

      if (!result) {
        throw {
          code: 404,
          message: "Data not found!"
        }
      }
     
      res.status(201).json(result)
    } catch (error) {
      res.status(error?.code || 500).json(error)
    }
  }
}

module.exports = PhotoController