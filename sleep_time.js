function  calculateSleepTime( times ) {
    let sleepingTime = 0;
    // let timeObject = {hour:"" minute:  second:}

    for (let time of times){
        if(typeof(time) === "number"){
            sleepingTime += time;
        }
        else{
            return "Invalid"
        }
    }
    // console.log(sleepingTime)
    let hour = Math.floor(sleepingTime / 3600);
    let minute = Math.floor((sleepingTime % 3600)/60);
    let second = Math.floor((sleepingTime % 3600)%60);
    return { hour, minute, second };
}
let times = [1000, 499, 519, 300];
let output5 = calculateSleepTime(times);
console.log(output5)

times = [100, 3800, "90" ];
output5 = calculateSleepTime(times);
console.log(output5);

times = [1000, 2000, 725];
output5 = calculateSleepTime(times);
console.log(output5)

times = [100, 3800];
output5 = calculateSleepTime(times);
console.log(output5)

times = [];
output5 = calculateSleepTime(times);
console.log(output5)

times = [5600];
output5 = calculateSleepTime(times);
console.log(output5)

