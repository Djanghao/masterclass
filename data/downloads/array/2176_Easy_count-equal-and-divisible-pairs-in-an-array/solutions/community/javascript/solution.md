# JavaScript solution, faster than 97.07% of JavaScript online submissions

**Author:** jvalu90
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1982665/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1982665/)

---

```
var countPairs = function(nums, k) {
  let counter = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      nums[i] == nums[j] && ((i * j) % k) === 0 ? counter++ : null
    }
  }
  
  return counter
  
};
```