"use strict";

const UserStorage = require("../../models/UserStorage");
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
        const users = UserStorage.getUsers("id", "pw");
//        console.log(id, pw); // 김 123
//        console.log(req.body); // { id: '김', pw: '123' }

        const response = {};
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw) {
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "failed login";
        return res.json(response);
    },
};
module.exports = {
    output,
    process,
};