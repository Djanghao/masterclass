# 🟢🔴🟢 Beats 100.00%👏 Just 3 Lines Code 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/5944270/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/5944270/)

---

```
class Solution {
  int smallestEqual(List<int> nums) {

    for(int i = 0; i < nums.length; i++)
    if(i % 10 == nums[i]) return i;
    return -1; 
    
  }
}
```