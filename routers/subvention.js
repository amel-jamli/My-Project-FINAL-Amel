const express = require('express');
const router = express.Router();
const Subvention = require('../models/Subvention');
const {subventionRules, validator } = require('../Middlewares/validator');


//--------------------------------- add sub------------------------------------------
router.post('/add', subventionRules() , validator ,   async (req, res) => {
    const { name, imgUrl, desc, more , type , user , nameU , phoneU , emailU } = req.body;

    try {

        const newSubvention = new Subvention({
            name, imgUrl, desc, type , user , nameU , phoneU , emailU
        });
        const subvention = await newSubvention.save();

        res.json({ msg: "subvention added", subvention });
    } catch (error) {
        res.json({ msg: "error add subvention" });
    }

})



//--------------------------------- get sub------------------------------------------
router.get('/', async (req, res) => {

    try {
        const subvention = await Subvention.find().populate('', ['name']);
        res.json({ msg: "data geted", subvention });
    } catch (error) {
        res.json({ msg: "error get msg" });
    }

})


//--------------------------------- get sub by type------------------------------------------
router.get('/:catId', async (req, res) => {
    try {
        const subvention = await Subvention.find({ type : req.params.catId });
        res.json({ msg: "data geted", subvention });
    } catch (error) {
        res.json({ msg: "error get subvention" });
    }

})


//---------------------------------delete type------------------------------------------

router.delete('/delete/:id',  async (req, res) => {
    const { id } = req.params;
    try {
        const subvention = await Subvention.findByIdAndDelete({ _id: id });
        res.json({ msg: "subvention deleted", subvention });
    } catch (error) {
        res.json({ msg: "error delete subvention" });
    }

})


//--------------------------------- edit type------------------------------------------

router.put('/edit/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const subvention = await Subvention.findByIdAndUpdate(_id, { $set: req.body }, { new: true, $upsert: true });
        res.json({ msg: "subvention edited", subvention });
    } catch (error) {
        res.json({ msg: "error edit subvention" });
    }

})



//--------------------------------- filter user------------------------------------------
router.get('/filter/:userid', async (req, res) => {
    try {
        const subvention = await Subvention.find({ user : req.params.userid });
        res.json({ msg: "data geted", subvention});
    } catch (error) {
        res.json({ msg: "error get user" });
    }

})


module.exports = router;
