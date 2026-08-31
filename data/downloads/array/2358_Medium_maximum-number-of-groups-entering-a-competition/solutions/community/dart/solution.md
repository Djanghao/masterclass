# [Dart] Too much Greedy, don't even need to touch the nums

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2993320/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2993320/)

---

# Complexity
- Time complexity:
O(i)

- Space complexity:
O(1)

# Code
```
class Solution {
  int maximumGroups(List<int> grades) {
    int n = grades.length;
    int i = 1, j = 1;
    while (i < n) {
      if (i + j + 1 <= n) {
        j++;
      }
      i += j;
    }

    return j;
  }
}
```