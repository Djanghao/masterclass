# 🟢🔴🟢 Beats 100.00%👏 3 Lines Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/5959449/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/5959449/)

---

```
class Solution {
  bool divideArray(List<int> nums) {
    nums.sort();
    for(int i = 0; i < nums.length; i+=2) if(nums[i] != nums[i+1]) return false;
    return true;
  }
}
```