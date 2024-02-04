console.log('Starting up');

setTimeout(()=>{console.log('ınside of callback')},
    20000);

setTimeout(()=>{console.log('second time ınside of callback')},
    0);


console.log('Finishing up');