# Prefix Sum || O(n)

**Author:** vponomarev279
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5087712/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5087712/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
function subsequenceSumOr(nums: number[]): number {
  let result = BigInt(0);
  let prefixSum = BigInt(0);

  for (const num of nums) {
    prefixSum += BigInt(num);

    result |= BigInt(num) | prefixSum;
  }

  return parseInt(result.toString());
};
```