"use strict";

const users = {
    id: ["김", "나", "박", "이"],
    pw: ["1234", "5678", "1357", "2468"],
};

const output = {
    home : (req, res) => {
        res.render("home/home");
    },
    login : (req, res) => {
        res.render("home/login");
    },
};
const process = {
    login : (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;
//        console.log(id, pw); // 김 123
//        console.log(req.body); // { id: '김', pw: '123' }
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw) {
                return res.json({ success: true});
            }
        }
        return res.json({ success: false, "msg": "failed login"});
    },
};
module.exports = {
    output,
    process,
};