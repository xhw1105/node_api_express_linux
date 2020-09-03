const express = require('express');

const { getBootcamps } = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps);

// router.get('/:id', (req, res) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
// });

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
