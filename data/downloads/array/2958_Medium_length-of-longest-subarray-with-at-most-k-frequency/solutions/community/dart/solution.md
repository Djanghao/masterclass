# Dart, HashMap + Sliding Window

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4935153/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4935153/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution {
  int maxSubarrayLength(List<int> nums, int k) {
    Map<int, int> freq = {};
    int maxLen = 0;
    var iLeft = 0;
    for (final (i, num) in nums.indexed) {
      freq[num] = (freq[num] ?? 0) + 1;
      while (freq[num]! > k) {
        final numLeft = nums[iLeft];
        freq[numLeft] = freq[numLeft]! - 1;
        iLeft++;
      }
      maxLen = max(maxLen, i - iLeft + 1);
    }
    return maxLen;
  }
}
```