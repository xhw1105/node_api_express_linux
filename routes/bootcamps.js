const express = require('express');

const {
  getBootcamps,
  createBootcamp,
  getBootcamp,
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp);

// router.post('/', (req, res) => {
//   res.status(201).json({ success: true, msg: 'Add a new bootcamp' });
// });

// router.put('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Modify bootcamp ${req.params.id}` });
// });

// router.delete('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
// });

module.exports = router;
