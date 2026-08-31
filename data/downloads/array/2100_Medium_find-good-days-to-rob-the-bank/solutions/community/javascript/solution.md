# Simple O(N) explained JavaScript solution

**Author:** svolkovichs
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623719/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623719/)

---

Let build to arrays `left[i]`and `right[i]`.
For `left[i]=left[i-1]+1` if `security[i-1] >= security[i]` - not increasing order, or 0 otherwise.
For `right[i] = right[i+1] +1` if `security[i+1] >= security[i]` - not decreasing order, or 0 otherwise.
The day i is a good day to robe if `left[i] >= time && right[i] >= time`

```
var goodDaysToRobBank = function(security, time) {
    const n = security.length
    const left = buildLeftValidArray(security)
    const right = buildRightValidArray(security)
    
    const result = []
    for(let i = 0; i < security.length; i++){
        // The day i is good day to rob if left[i] and right[i] >= time
        if(left[i] >= time && right[i] >= time){
            result.push(i)
        }
    }
    
    return result
};

function buildRightValidArray(security){
    const n = security.length
    const right = new Array(n)
    
    right[n-1] = 0
    
    for(let i = n-2; i >= 0; i--){
        if(security[i+1] >= security[i]){
            right[i] = right[i+1] +1
        }
        else{
            right[i] = 0
        }
    }
    
    return right
}

function buildLeftValidArray(security){
    const n = security.length
    const left = new Array(n)
    left[0] = 0
    for(let i = 1; i < n; i++){
        if(security[i-1] >= security[i]){
            left[i] = left[i-1] + 1
        }else
        {
            left[i] = 0
        }
    }
    
    return left
}
```