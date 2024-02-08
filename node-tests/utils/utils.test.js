const utils = require('./utils');
const expect = require('expect');

it('should add two numbers.', () => {
    var res = utils.add(33, 11);
    expect.expect(res).toBe(44);
    expect.expect(typeof res).toBe('number');
    // if (res !== 44){
    //     throw new Error(`Expected 44, but got ${res}.`);
});


it('should square a number.', () => {
    var res = utils.square(3);
    expect.expect(res).toBe(9)
    // if (res !== 9){
    //     throw new Error(`Expected 9, but got ${res}.`);
});