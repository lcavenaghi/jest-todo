const greet = (name) => {
    if (!name)
        throw Error(`Name shouldn't be empty`)
    else
        return `Hello ${name}, welcome to the testing project`
};

module.exports = greet