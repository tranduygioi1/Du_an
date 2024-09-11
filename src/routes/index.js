const newsRouter = require('./news');
const adminRouter = require('./admin');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/admin', adminRouter);
  app.use('/', siteRouter);
}
module.exports = route;
