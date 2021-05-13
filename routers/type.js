const express = require('express');
const isAdmin = require('../Middlewares/isAdmin');
const { typeRules, validator } = require('../Middlewares/validator');
const router = express.Router();
const Type = require('../models/Type');




//---------------------------------get type------------------------------------------
router.get('/', async (req, res) => {

    try {
        const type = await Type.find();
        res.json({ msg: "data geted", type });
    } catch (error) {
        res.json({ msg: "error get type" });
    }
})

//--------------------------------- delete type------------------------------------------

router.delete('/delete/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
        const type = await Type.findByIdAndDelete(id);
        res.json({ msg: "type deleted", type });
    } catch (error) {
        res.json({ msg: "error delete type" });
    }
})

//--------------------------------- post type------------------------------------------

router.post('/', isAdmin, typeRules(), validator, async (req, res) => {
    const { name, description } = req.body
    try {
        const newType = new Type({  name, description });
        await newType.save();
        res.json({ msg: "type added", newType });
    } catch (error) {
        res.json({ msg: "error add type" }, error.message);
    }
})

//--------------------------------- edit type------------------------------------------

router.put('/edit/:_id', isAdmin, async (req, res) => {
    const { _id } = req.params;
    try {
        const type = await Type.findByIdAndUpdate(_id, { $set: req.body }, { new: true, $upsert: true });
        res.json({ msg: "type edited", type });
    } catch (error) {
        res.json({ msg: "error edit type" });
    }

})

module.exports = router;
