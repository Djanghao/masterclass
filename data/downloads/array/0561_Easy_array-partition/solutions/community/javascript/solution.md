# Intuitive Javascript Solution

**Author:** DawChihLiou
**Votes:** 17
**Link:** [https://leetcode.com/problems/array-partition/solutions/102220/](https://leetcode.com/problems/array-partition/solutions/102220/)

---

```
var arrayPairSum = function(nums) {
    // sort and sum up the minimum of the pairs
    return nums
        .sort((a, b) => a - b)
        .reduce((sum, cur, i) => (i % 2 === 0) ? sum += cur : sum, 0);
};
```