# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/5043648/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/5043648/)

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
    int maxDistance(List<int> nums1, List<int> nums2) {
        var maximum = -1000000;
        var i = 0;
        var j = 0;
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                maximum = max(maximum, j - i);
                j++;
            } else {
                i++;
            }
        }

        return maximum <= 0 ? 0 : maximum;
    }
}
```