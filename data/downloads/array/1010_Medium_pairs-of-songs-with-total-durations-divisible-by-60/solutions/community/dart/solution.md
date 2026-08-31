# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/5328447/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/5328447/)

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
  int numPairsDivisibleBy60(List<int> time) {
    List<int> buckets = List.filled(60, 0);
    int res = 0;
    for (int i in time) {
      int modValue = i % 60;
      res += buckets[(60 - modValue) % 60];
      buckets[modValue]++;
    }
    return res;
  }
}
```