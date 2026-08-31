# JavaScript Solution - Two Pointers Approach

**Author:** Deadication
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/1407508/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/1407508/)

---

```
var getStrongest = function(arr, k) {
    const n = arr.length;
    
    arr.sort((a, b) => a - b);
    
    let left = 0;
    let right = n - 1;
    
    const idx = Math.floor((n - 1) / 2);
    const median = arr[idx];
    
    const res = [];
    
    while (k > 0) {
        const leftNum = arr[left];
        const rightNum = arr[right];
        
        const leftStr = Math.abs(leftNum - median);
        const rightStr = Math.abs(rightNum - median);
        
        if ((leftStr > rightStr) || (leftStr === rightStr && leftNum > rightNum)) {
            res.push(leftNum);
            left++;
        }
        else {
            res.push(rightNum);
            right--;
        }
        k--;
    }
    
    return res;
};
```