# The fastest in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/4067504/](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/4067504/)

---


# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
class Solution {
  int minOperations(List<int> nums, int x) {
    int target = 0;
    int n = nums.length;
    for (int num in nums) {
      target += num;
    }
    target -= x;

    if (target == 0) {
      return n;
    }

    int maxLen = 0;
    int curSum = 0;
    int left = 0;

    for (int right = 0; right < n; ++right) {
      curSum += nums[right];
      while (left <= right && curSum > target) {
        curSum -= nums[left];
        left++;
      }
      if (curSum == target) {
        maxLen = max(maxLen, right - left + 1);
      }
    }

    return maxLen != 0 ? n - maxLen : -1;
  }
}

```