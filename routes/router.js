const express = require('express');
const router = express.Router();
const conn = require('../config/DB.js');

router.post('/add', (req, res) => {
  let todayList = req.body.todayList
  let date = req.body.date

  let sql = 'insert into todoList values (?,?)'

  conn.query(sql, [todayList, date], (err, rows) => {

    if (rows) {
      console.log('success')
      res.render('add', {
        todayList,
        date
      }
      )
    } else {
      console.log('fail')
    }
  })

})

module.exports = router;