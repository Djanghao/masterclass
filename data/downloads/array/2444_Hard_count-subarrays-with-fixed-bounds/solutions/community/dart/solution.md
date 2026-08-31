# Dart, O(n) solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4949116/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4949116/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
class Solution {
  int countSubarrays(List<int> nums, int minK, int maxK) {
    int count = 0;
    int minimum = -1, maximum = -1, start = 0;
    for (var (i, num) in nums.indexed) {
      if (num < minK || num > maxK) {
        minimum = maximum = -1;
        start = i + 1;
      }
      if (num == minK) minimum = i;
      if (num == maxK) maximum = i;
      
      count += max(0, min(minimum, maximum) - start + 1);
    }
    return count;
  }
}
```