# efficient JS

**Author:** javad_pk
**Votes:** 2
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4745921/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/4745921/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let arr = (n === 0) ? [0] : [0, 1];
    let i=1
    while(arr.length<=n-1){
        arr.push(arr[i])
        arr.push(arr[i]+arr[i+1])
        i++
    }
    return Math.max(...arr)
};
```