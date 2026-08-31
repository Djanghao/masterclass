# 🟢🔴🟢  Beats 100.00%👏 3 Lines Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/6069466/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/6069466/)

---

```
class Solution {
  int minimumCost(List<int> nums) {
    int first = nums.removeAt(0);
    nums.sort();
    return first + nums[0] + nums[1];
  }
}
```