"use strict";

class UserStorage {
    static #users = {
    id: ["김", "나", "박", "이"],
    pw: ["1234", "5678", "1357", "2468"],
    name: ["범수", "얼", "효신", "연우"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
};

module.exports = UserStorage;