# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-ii/solutions/5430815/](https://leetcode.com/problems/alternating-groups-ii/solutions/5430815/)

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
  int numberOfAlternatingGroups(List<int> colors, int k) {
    int l = 0;
    int count = 0;
    for (int i = 0; i < k; i++) {
        colors.add(colors[i]);
    }
    int n = colors.length;
    for (int r = 1; r < n - 1; r++) {
        if (colors[r] == colors[r - 1]) {
            l = r;
        }
        int subArraySize = r - l + 1;
        if (subArraySize >= k) {
            count++;
        }
    }
    return count;
  }
}
```