# Dart language, sliding window, bitmask,  O(N)

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/2881747/](https://leetcode.com/problems/longest-nice-subarray/solutions/2881747/)

---

# Intuition

We need to find the longest subarray where every element has unique bits.

# Approach
Create a bitmask; whenever array element & bitmask = 0 -> we deal with unique bits. 

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```


class Solution {
  int longestNiceSubarray(List<int> nums) {
    if (nums.length < 2) return nums.length;
    int last = 0;
    int mask = nums[0];
    int len = 1;
    for (int i = 1; i < nums.length; i++) {
      if (mask & nums[i] == 0) {
        mask |= nums[i];
        len = max(len, i - last + 1);
        continue;
      }

      while (last < i && (mask & nums[i]) != 0) mask = mask & ~nums[last++];
      mask |= nums[i];
    }

    return len;
  }
}
```