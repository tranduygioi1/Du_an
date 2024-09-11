const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');


router.get('/manager/novel', adminController.managerNovel);

module.exports = router;
