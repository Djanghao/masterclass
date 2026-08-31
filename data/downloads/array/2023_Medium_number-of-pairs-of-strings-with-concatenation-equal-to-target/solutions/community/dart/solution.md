# 🟢🔴🟢 Beats 100.00%👏 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/5938023/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/5938023/)

---

```
class Solution {
  int numOfPairs(List<String> nums, String target) {
    int count = 0;
    for(int i = 0; i < nums.length; i++){
        for(int j = 0; j < nums.length; j++){
            if(i != j && nums[i]+nums[j] == target) count++;
        }
    }
    return count;
  }
}
```