# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/4969495/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/4969495/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
find the Longest Common Subarray of nums1 and nums2. This approach can also be used to find the Longest Common Substring

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
    int findLength(List<int> nums1, List<int> nums2) {
        final List<List<int>> dp = List.generate(nums1.length + 1, (_) => List.filled(nums2.length + 1, 0));
        var maximum = 0;
        for (int i = 0; i < nums1.length + 1; i++) {
            for (int j = 0; j < nums2.length + 1; j++) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                } else if (nums1[i - 1] == nums2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    maximum = max(maximum, dp[i][j]);
                } else {
                    dp[i][j] = 0;
                }
            }
        }

        return maximum;
    }
}
```