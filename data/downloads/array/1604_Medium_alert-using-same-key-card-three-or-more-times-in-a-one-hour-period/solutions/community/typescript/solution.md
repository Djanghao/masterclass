# lazy and beautiful TS/JS solution AHAHHAH, and of course IT F SLOW | Typescript/JS

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/3576017/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/3576017/)

---

# Code
```
function alertNames(keyName: string[], keyTime: string[]): string[] {
    const result: string[] = [];

    const name_time: {[name: string]: number[][]} = {}; // {name : [hours, minutes], ...}

    for (let i = 0; i < keyName.length; i += 1){
        const hours_string: string = keyTime[i].substring(0,2);
        const minutes_string: string = keyTime[i].substring(3);
        if (!name_time[keyName[i]]){
            name_time[keyName[i]] = [[Number(hours_string), Number(minutes_string)]];
            continue;
        }
        name_time[keyName[i]].push([Number(hours_string), Number(minutes_string)]);
    }
    console.log("grouped", name_time);

    // need sorting ? idk maybe

    // checking per person
    for (let name of Object.keys(name_time)){
        const times: number[][] = name_time[name];
        for (let i = 0; i < times.length; i += 1){
            let count: number = 1;
            const low_limit: number[] = times[i];
            const upper_limit: number[] =[times[i][0]+1, times[i][1]];
            // if (upper_limit[1] >= 60){
            //     upper_limit[1] -= 60;
            //     upper_limit[0] += 1;
            //     // if (upper_limit[0] === 24){
            //     //     upper_limit[0] = 0;
            //     // }
            // }
            for (let j = 0; j < times.length; j += 1){
                if (i === j)continue;
                if (is_in_time_interval(times[j], low_limit, upper_limit)){
                    count += 1;
                }
            }
            // console.log(low_limit, upper_limit, count);
            if (count >= 3){
                result.push(name);
                break;
            }
        }
    }

    return result.sort();
};
const is_in_time_interval = (time: number[], low_limit: number[], upper_limit: number[]): boolean => {
    if (time[0] === low_limit[0]){
        return time[1] >= low_limit[1];
    }
    if (time[0] === upper_limit[0]){
        return time[1] <= upper_limit[1];
    }
    return false;
}
```