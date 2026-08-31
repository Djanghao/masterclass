# [Javascript] Simple DP

**Author:** alanchanghsnu
**Votes:** 4
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/635564/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/635564/)

---

Define the array with the length of total cost (target+1).
For each index (total cost), it will save the string of max integer.
```
var largestNumber = function(cost, target) {
    const arr = new Array(target+1).fill('#');
    arr[0] = '';
    
    for (let i = 0; i < 9; i++) {
        for (let j = cost[i]; j <= target; j++) {
            if (arr[j-cost[i]] !== '#' && arr[j-cost[i]].length + 1 >= arr[j].length) {
                arr[j] = (i+1).toString().concat(arr[j-cost[i]]);
            }
        }
    }
    
    return arr[target] == '#' ? '0' : arr[target];
};
```