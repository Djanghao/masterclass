# [Dart] Sort reverse & prefix sum

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3300652/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3300652/)

---

# Code
```
class Solution {
  int maxScore(List<int> nums) {
    int n = nums.length;
    nums.sort((a, b) => b.compareTo(a));
    int res = 0;
    for (var sum = 0, i = 0; i < n; i++) {
      sum += nums[i];
      if (sum > 0) {
        res++;
      }
    }
    return res;
  }
}
```