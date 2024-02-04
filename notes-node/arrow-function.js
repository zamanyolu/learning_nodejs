var square = x => x**2;
console.log(square(9));

var user = {
    name: 'Hakan',
    sayHi: ()=>{
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt (){
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};

// user.sayHiAlt(1,2,3);
user.sayHi(1,2,3);

