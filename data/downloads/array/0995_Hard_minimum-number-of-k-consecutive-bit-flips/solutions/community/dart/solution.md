# Fast

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5360145/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5360145/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:typed_data';

class Solution {
  int minKBitFlips(List<int> nums, int K) {
    int n = nums.length, flipped = 0, res = 0;
    final isFlipped = Int16List(n);

    for (int i = 0; i < nums.length; ++i) {
      if (i >= K) flipped ^= isFlipped[i - K];

      if (flipped == nums[i]) {
        if (i + K > nums.length) return -1;
        isFlipped[i] = 1;
        flipped ^= 1;
        res++;
      }
    }

    return res;
  }
}

```