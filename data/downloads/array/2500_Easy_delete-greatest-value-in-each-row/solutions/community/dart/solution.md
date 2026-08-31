# day one

**Author:** ecuWA8fdto
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/5977962/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/5977962/)

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
```dart []
class Solution {
  int deleteGreatestValue(List<List<int>> grid) {
    int answer = 0;

  for (int i = 0; i < grid.length; i++) {
    grid[i].sort();
  }

  while (grid[0].isNotEmpty) {
    int maxOfDeleted = 0;
    for (int i = 0; i < grid.length; i++) {
      int rowMax = grid[i].removeLast();
      maxOfDeleted = maxOfDeleted > rowMax ? maxOfDeleted : rowMax;
    }

    answer += maxOfDeleted;
  }

  return answer;
  }
}
```