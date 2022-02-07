const {
    expect,
    test
} = require('@jest/globals');
const UserApi = require('./user-api');

describe("UserApi", () => {
    describe("findAll", () => {
        test("Must return a list of users", () => {
            const userApi = new UserApi;

            return userApi.findAll().then(users => {
                expect(users.length).toBeGreaterThan(0);
            })
        });
    })
    describe("find", () => {
        
        test("Must return a specific user", () => {
            const userApi = new UserApi;

            return userApi.find(1).then(users => {
                expect(users.id).toBe(1);
                expect(users.name).toBe('Leanne Graham');
            })
        });
        
        test("Must throw exception", () => {
            const userApi = new UserApi;

            return userApi.find(99999).catch(exception => {
                expect(exception.message).toBe('Not Found');
            })
        });
    })

})