# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/4258281/](https://leetcode.com/problems/total-hamming-distance/solutions/4258281/)

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
  int totalHammingDistance(List<int> nums) {
    var total = 0;
    for (int i = 0; i < 32; i++) {
        var c = 0;
        for (final num in nums) {
            if ((num & (1 << i)) != 0) {
                c++;
            }
        }
        total += c * (nums.length - c);
    }
    return total;
  }
}
```