const router = require('express').Router();
const jobController = require('../controllers/jobController');

router.post('/', jobController.creatJob);
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJob);

router.get('/search/:key', jobController.searchJobs);
router.post('/:id', jobController.getJob);
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);


module.exports = router;