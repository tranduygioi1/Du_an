const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(course => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next); // Chuyển lỗi đến middleware xử lý lỗi
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create'); // Hiển thị trang tạo khóa học
  }

  //[POST] /courses/admin
  admin(req, res, next) {
    const formData = req.body;

    // Xác định loại dữ liệu và gán URL hình ảnh tương ứng
    if (formData.type === 'video') {
      formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg`;
      // Đảm bảo videoId tồn tại khi loại là video
      if (!formData.videoId) {
        return res.status(400).send('Lỗi !!!');
      }
    } else if (formData.type === 'novel') {
      const novelName = formData.name.toLowerCase().replace(/\s+/g, '-'); // Chuyển đổi name thành dạng URL hợp lệ
      formData.image = `https://novelbin.me/media/novel/${novelName}.jpg`;
      
      // Đảm bảo videoId không được cung cấp khi loại là novel
      delete formData.videoId;
    }

    const course = new Course(formData);

    course.save()
      .then(() => res.redirect('/')) // Sau khi lưu xong, chuyển hướng đến trang chính
      .catch(error => {
        // Xử lý lỗi khi lưu khóa học
        console.error(error);
        res.status(500).send('Lỗi...');
      });
  }
}

module.exports = new CourseController();
