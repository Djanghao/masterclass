# TS solution

**Author:** n1md7
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3203217/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3203217/)

---

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimizeSum(nums: number[]): number {
  const sorted = nums.sort((a, b) => a - b);
  
  const n = sorted.length;
  // Firt two taken out
  const one = sorted[n - 1] - sorted[2];
  // Last two taken out
  const two = sorted[n - 3] - sorted[0];
  // First and last taken out
  const thr = sorted[n - 2] - sorted[1];
  
  return Math.min(one, two, thr);
};
```