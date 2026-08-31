# 🟢🔴🟢 Beats 100.00%👏 3 Lines Solutions 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/5899267/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/5899267/)

---

```
class Solution {
  int minElements(List<int> nums, int limit, int goal) {

    int total = nums.fold(0,(a,b)=> a+b);
    int add = goal - total;
    return (add.abs() / limit).ceil();
    
  }
}
```