# Simple Dart solution

**Author:** KhizhniakovM
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/4971134/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/4971134/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
  int zeroFilledSubarray(List<int> nums) {
    int res = 0, zeroSeqLength = 0;

    for (final n in nums) {
      if (n == 0) {
        zeroSeqLength += 1;
        res += zeroSeqLength;
      } else {
        zeroSeqLength = 0;
      }
    }

    return res;
  }
}
```