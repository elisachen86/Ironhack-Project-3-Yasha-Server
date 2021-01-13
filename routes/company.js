// router prefix  /api/company
const express = require("express");
const router = express.Router();
const User = require("../models/Company");
const Company = require("../models/Company");


///////  POST USE'S COMPANY INFO : CREATE ///////

router.post("/mycompany",
// requireAuth, 
        (req, res, next) => {
            
            const currentUserId = req.session.currentUser; 
            Company.create(req.body)
            .then((companyDocument) => {
                console.log("here=>",companyDocument)
                Company.findByIdAndUpdate(companyDocument._id, {$push: {userList: currentUserId}}, {new: true})
            })
            .then((resFromApi) => {
                res.status(200).json(resFromApi)
            })  
            .catch(next);
        });

//Question : maybe company info needs to be saved in the app state so we can use across the app ? 

///////  GET USE'S COMPANY INFO ///////
// TBC : deploying the requireAuth, uncomment the line below
router.get("/mycompany", 
// requireAuth, 
        (req, res, next) => {
        const currentUserId = req.session.currentUser; 
            User.findById(currentUserId).populate("company")
        .then((resFromApi) => {
            // console.log(resFromApi)
            res.status(200).json(resFromApi);
        })
        .catch(next);
    });



module.exports = router;