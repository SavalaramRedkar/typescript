function main(a, b, callback) {
    callback(a, b);
}
function addNumbers(a, b) {
    return a + b;
}
function subNumbers(a, b) {
    return a - b;
}
console.log(main(2, 3, addNumbers));
console.log(main(20, 10, subNumbers));
