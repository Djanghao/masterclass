# the fastest in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-a-good-subarray/solutions/4195886/](https://leetcode.com/problems/maximum-score-of-a-good-subarray/solutions/4195886/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
class Solution {
  int maximumScore(List<int> nums, int k) {
    int res = nums[k];
    int mini = nums[k];
    int i = k;
    int j = k;
    int n = nums.length;

    while (i > 0 || j < n - 1) {
      if (i == 0) {
        j++;
      } else if (j == n - 1) {
        i--;
      } else if (nums[i - 1] < nums[j + 1]) {
        j++;
      } else {
        i--;
      }

      mini = mini < nums[i] && mini < nums[j] ? mini : nums[i] < nums[j] ? nums[i] : nums[j];
      res = res > mini * (j - i + 1) ? res : mini * (j - i + 1);
    }

    return res;
  }
}
```