const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class AdminController {

  //[GET] /manager/novel
  managerNovel(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('admin/manager-novel', {
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(next)
  }
}

module.exports = new AdminController()
