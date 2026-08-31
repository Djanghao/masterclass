# Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3719539/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/3719539/)

---

# Intuition
Keep finding the 1 series. Remember the previous 1 series, and check if we can combine the 1 series found with the previous 1 series.

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:math';

class Solution {
  int longestSubarray(List<int> nums) {
    var res = 0;

    List<List<int>> seg = [];
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] == 0) continue;
      final begin = i;
      while (i + 1 < nums.length && nums[i + 1] == nums[i]) i++;
      res = max(res, i + 1 - begin);
      
      if (seg.isNotEmpty) {
        final prev = seg.removeLast();
        
        if (begin - prev[1] == 2)
          res = max(res, prev[1] + 1 - prev[0] + i + 1 - begin);
      }

      seg.add([begin, i]);
    }
    return min(res, nums.length - 1);
  }
}
```