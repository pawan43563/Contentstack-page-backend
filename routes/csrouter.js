const express=require("express");
const router=express.Router();

const {
    fetchResuableComponentdata,
    gethomepagedata
} =require('../controllers/cscontroller')


router
    .route('/navbar')
    .get(fetchResuableComponentdata)
router
    .route('/footer')
    .get(fetchResuableComponentdata)


router
    .route('/homepage')
    .get(gethomepagedata)

module.exports=router