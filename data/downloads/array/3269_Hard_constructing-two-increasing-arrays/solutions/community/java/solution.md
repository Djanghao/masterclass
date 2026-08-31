# [Java] DP Soluion, O(m * n), 32ms

**Author:** JobHunting
**Votes:** 0
**Link:** [https://leetcode.com/problems/constructing-two-increasing-arrays/solutions/5704813/](https://leetcode.com/problems/constructing-two-increasing-arrays/solutions/5704813/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m * n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    // time = O(m * n), space = O(m * n)
    public int minLargest(int[] nums1, int[] nums2) {
        int m = nums1.length, n = nums2.length;
        int inf = 0x3f3f3f3f;
        int[][] f = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) Arrays.fill(f[i], inf);

        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0 && j == 0) f[i][j] = 0;
                else {
                    if (i > 0) {
                        f[i][j] = Math.min(f[i][j], f[i - 1][j] + (f[i - 1][j] % 2 == nums1[i - 1] ? 2 : 1));
                    }
                    if (j > 0) {
                        f[i][j] = Math.min(f[i][j], f[i][j - 1] + (f[i][j - 1] % 2 == nums2[j - 1] ? 2 : 1));
                    }
                }
            }
        }
        return f[m][n];
    }
}
```