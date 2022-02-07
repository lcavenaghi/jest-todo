const superagent = require('superagent');

class UserApi {

    findAll() {
        return new Promise((resolve, reject) => {
            superagent.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => resolve(response.body))
            .catch(reject)
        });
    }

    find(id) {
        return new Promise((resolve, reject) => {
            superagent.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => resolve(response.body))
            .catch(reject)
        });
    }

}

module.exports = UserApi;