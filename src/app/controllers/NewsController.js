//[GET] /news
class NewsController {
  index(req, res) {
    res.render('news');
  }
  //[GET] /news/:slug
  show(req, res) {
    res.send('New DETAIL');
  }
}

module.exports = new NewsController();
