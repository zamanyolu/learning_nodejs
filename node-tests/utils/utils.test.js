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
    expect.expect(res).toBe(9);
    expect.expect({name:'Hakan'}).toEqual({name: 'Hakan'});
    expect.expect([2,3,4]).not.toContain(5);
    // if (res !== 9){
    //     throw new Error(`Expected 9, but got ${res}.`);
});

it('should set firstName and lastName',()=>{
    var user = {location:'Artvin', age:47};
    var res = utils.setName(user, "Hakan Temiz");
    expect.expect(user).toEqual(res);
    expect.expect(res).toMatchObject({
        firstName: 'Hakan',
        lastName: 'Temiz'
    });
})


it('should async add two numbers', (done)=>{
    utils.asyncAdd(4, 3, (sum) => {
        expect.expect(sum).toBe(7);
        expect.expect(typeof sum).toBe('number');
        done();
    });
});

it('should async square a number', (done)=>{
    utils.asyncSquare(5,(res)=>{
    expect.expect(res).toBe(25);
        done();
    })
})








