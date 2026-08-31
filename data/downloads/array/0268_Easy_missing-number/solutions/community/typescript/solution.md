# JavaScript / TypeScript Solution

**Author:** plskz
**Votes:** 7
**Link:** [https://leetcode.com/problems/missing-number/solutions/3363992/](https://leetcode.com/problems/missing-number/solutions/3363992/)

---

# Code
```
function missingNumber(nums: number[]): number {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  let sum = nums.reduce((a, b) => a + b);

  return total - sum;
}

console.log(missingNumber([0, 2, 3])); // 1
console.log(missingNumber([3, 0, 1])); // 2

```