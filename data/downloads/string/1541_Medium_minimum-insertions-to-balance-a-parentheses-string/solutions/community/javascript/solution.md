# [JavaScript] O(1) space

**Author:** B_Cheng
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/2028472/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/2028472/)

---

``` 
var minInsertions = function(s) {
    let rightNeeded = 0;
    let leftNeeded = 0;
    for (const char of s) {
        if (char === "(") {
            if (rightNeeded % 2 === 0) {
                rightNeeded += 2;  
            } else {                
                rightNeeded++;
                leftNeeded++;
            }
        } else {
            rightNeeded--;
            if (rightNeeded === -1 ){
                leftNeeded++;
                rightNeeded = 1;
            }
        }
    }
    return leftNeeded + rightNeeded;
};
```
