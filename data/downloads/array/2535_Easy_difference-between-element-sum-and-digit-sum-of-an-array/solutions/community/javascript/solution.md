# Js One Line

**Author:** hanbi58
**Votes:** 6
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3052590/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3052590/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
var differenceOfSum = function (nums) {
  return Math.abs(nums.reduce((p, v) => p + v) - nums.join("").split("").reduce((p, v) => +p + +v));
};

```