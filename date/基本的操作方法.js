// 获取 年 月 日 小时 分钟 秒 毫秒
const data = new Date(2023, 7, 26, 16, 26, 30, 30)
console.log(data);


console.log(data.getFullYear()); //返回年份
console.log(data.getMonth());  // 返回月
console.log(data.getDay()); // 返回日期中一周的第几天, 0-6 sunday-saturday
console.log(data.getDate()); // 返回哪一日
console.log(data.getHours()) // 返回小时 0-23
console.log(data.getMinutes()) // 返回分钟 0-59
console.log(data.getSeconds()); // 返回秒 0-59
console.log(data.getMilliseconds()) // 返回毫秒 0-999
