# 📌Javascript Solution✔️ | 81ms || Array methods

**Author:** SathishGunasekaran
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706756/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/2706756/)

---

```
var countTime = function(time) {
    let [hours,minutes] = time.split(':');
    let result = [];
    if(hours == '??') result.push(24);
    else{
        if(hours[0] == '?'){
            hours[1]>3?result.push(2):result.push(3)
        } 
        if(hours[1] == '?'){
            hours[0]==2?result.push(4):result.push(10) 
        }   
    }
    if(minutes[0] == '?'){
        result.push(6)
    } 
    if(minutes[1] == '?'){
        result.push(10) 
    }
    return result.reduce((a,b)=>a*b,1);
};
```