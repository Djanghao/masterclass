# Simple js solution ~ 200ms

**Author:** uriha
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3970561/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3970561/)

---

# Code
```
var minimumPossibleSum = function(n, target) {
    let [obj,arr,i,ans]= [{},[],1,0]
    while(arr.length != n){
        if(obj[i]){i++;continue}
        arr.push(i)
        ans += i
        obj[target-i++] = true
    }
    return ans
};
```