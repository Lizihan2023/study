let timer = new Date('2023-7-28 12:00:00')
let nowTime = new Date()
let totime = timer - nowTime
console.log(timer);
console.log(totime);
console.log(Math.floor(totime / 1000));
console.log(Math.floor(totime / 1000 / 60));
console.log(Math.floor(totime / 1000 / 60 / 60));
console.log(Math.floor(totime / 1000 / 60 / 60 / 24));
