const greet = require("./greeting");

describe("Hello", () => {
    test("Hello user Lucas", () => {
        expect(greet('Lucas')).toBe('Hello Lucas, welcome to the testing project');
    })

    test('Empty user should generate exception', () => {
        const execution = () => greet('');
        expect(execution).toThrow();
    })

    test('Undefined user should generate exception', () => {
        const execution = () => greet(undefined);
        expect(execution).toThrow();
    })
})