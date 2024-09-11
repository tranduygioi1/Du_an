const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
  
  // Render trang chủ với danh sách các khóa học
  index(req, res, next) {
    Course.find({})
      .then(courses => {
        // Chuyển đổi tất cả các đối tượng khóa học thành định dạng plain object
        res.render('home', { 
          courses: mutipleMongooseToObject(courses) 
        })
      })
      .catch(next)
  }

  // Render trang tìm kiếm
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
