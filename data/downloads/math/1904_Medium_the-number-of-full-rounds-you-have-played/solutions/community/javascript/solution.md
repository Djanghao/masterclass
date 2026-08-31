# Javascript simple 100% time 100% space

**Author:** theesoteric
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1285556/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/1285556/)

---

Approach:
Convert everything to minute and run a loop from start time in minutes to finish time in minutes
Add 24*60 minutes if finish time is less than start time
Increment the answer(except for the first occurrance) by 1 whenever minute count is multiple of 15

```
/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
var numberOfRounds = function(startTime, finishTime) {

    let startH,startM,finishH,finishM,start=-1,ans=0,addition=0,startInMin,finishInMin;
    startH = parseInt(startTime.substring(0,2));
    startM = parseInt(startTime.substring(3));
    finishH = parseInt(finishTime.substring(0,2));
    finishM = parseInt(finishTime.substring(3));
    
    if(finishH<startH || (finishH===startH && finishM<startM)){//Add 24*60 minutes if finish time is less than start time
        addition = 24*60;
    }
    
    startInMin = startH*60+startM;
    finishInMin = finishH*60+finishM+addition;
    
    for(let i=startInMin;i<=finishInMin;i++){
        if(i%15===0){
            if(start===-1){
                start=1;
            }else{
                ans++;
            }
        }
    }
    return ans;
};
```