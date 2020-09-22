alarms = process.argv.slice(2);
// console.log(alarms);
numAlarm = [];

for (alarm of alarms) {
  numAlarm.push(Number(alarm))
}


let max = 0;
for (alarm of numAlarm) {
  //Condition that allows us to jump to newline at the end
  let count = alarm;
  if (count > max) {
    max = count
  }

  if (alarms.length !== 0 && Number.isInteger(alarm) && alarm > 0) {
    setTimeout(() => { 
      process.stdout.write('\x07');
      // console.log(count)
      if (count === max) {
        setTimeout(() => { process.stdout.write('\n') }, 0)
      }
    }, alarm)
  }

  
  
}

// for (alarm of alarms) {
//   let count = alarm;
//   if (alarms.length !== 0 && Number.isInteger(Number(alarm)) && alarm > 0) {
//     //set that beep according to value of alarm

//     setTimeout(() => {  process.stdout.write(count);
//     }, Number(alarm));
//   }
//   if (count === Math.max(alarms)) {
//     setTimeout(() => {  process.stdout.write('\n');
//     }, count)
//   }
// }

