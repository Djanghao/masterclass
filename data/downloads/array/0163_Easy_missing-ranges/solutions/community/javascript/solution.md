# Clean JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 22
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/399286/](https://leetcode.com/problems/missing-ranges/solutions/399286/)

---

```
function findMissingRanges(nums, lower, upper) {
  const res = [];
  nums = [lower - 1, ...nums, upper + 1];

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];

    if (diff === 2) {
      res.push(`${nums[i - 1] + 1}`);
    } else if (diff > 2) {
      res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }

  return res;
}
```

