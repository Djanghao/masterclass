# Lienear javascript solution explained

**Author:** svolkovichs
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/1709777/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/1709777/)

---

First of all we need to find any sequence. Let start from 0 and apply all the operations.
Then let adkust our sequence to the lowwer limit. So the minimum element of our sequence = lower limit.
Now the anser would be equal to "Upper Limit" - "Adjusted Max of our sequence".
If the answer <= 0 there are now possible sequences.
```
var numberOfArrays = function(differences, lower, upper) {
    let dp = new Array(differences.length+1)
    
    dp[0] = 0
    let min = dp[0]
    let max = dp[0]
    for(let i = 1; i <= differences.length; i++){
        dp[i] = dp[i-1] + differences[i-1]
        min = Math.min(dp[i], min)
        max = Math.max(dp[i], max)
    }
    
    let shift = min - lower
    max = max - shift
    
    let count = upper - max + 1
    if(count <= 0){
        return 0
    }

    return count
};
```