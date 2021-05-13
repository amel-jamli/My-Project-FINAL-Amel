const express = require('express');


const { msgRules, validator } = require('../Middlewares/validator');

const router = express.Router();
const Msg = require('../models/Msg');

//--------------------------------- get msg-----------------------------------------

router.get('/', async (req, res) => {

    try {
        const msg = await Msg.find();
        res.json({ msg: "data geted", msg });
    } catch (error) {
        res.json({ msg: "error get msg" });
    }
})

//--------------------------------- delte msg------------------------------------------

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const msg = await Msg.findByIdAndDelete(id);
        res.json({ msg: "message deleted", msg });
    } catch (error) {
        res.json({ msg: "error delete msg" });
    }
})

//---------------------------------send msg------------------------------------------
router.post('/',msgRules() , validator , async (req, res) => {
    const { title, desc , emailU } = req.body
    try {
        const newMsg = new Msg({
            title, desc , emailU
        });
        await newMsg.save();
        res.json({ msg: "message sended", newMsg });
    } catch (error) {
        res.json({ msg: "error send msg" }, error.message);
    }
})









// export
module.exports = router
