# Dart...

**Author:** 0varun
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/4595778/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/4595778/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int longestAlternatingSubarray(List<int> nums, int threshold) {
    int i = 0, n = nums.length, ans = 0;
    
    while (i < n) {
      int start = i;
      i++;
      if (nums[start] > threshold || nums[start] % 2 != 0) {
        continue;
      }
      while (i < n && nums[i] <= threshold && nums[i] % 2 != nums[i - 1] % 2) {
        i++;
      }
      ans = ans > (i - start) ? ans : (i - start);
    }
    
    return ans;
  }
}

```