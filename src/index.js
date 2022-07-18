module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const objectsArray = bracketsConfig.map((el) => ({ [el[0]]: el[1] }));
    const hashMap = Object.assign({}, ...objectsArray);

    for (let symb of str) {
        if (hashMap[symb] && !stack.includes(symb)) {
            stack.push(hashMap[symb]);
        } else if (stack.length > 0 && stack[stack.length - 1] === symb) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};
