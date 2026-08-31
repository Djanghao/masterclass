# Beats 100% M

**Author:** Motabbir
**Votes:** 1
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5151230/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5151230/)

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
  int matrixScore(List<List<int>> grid) {
    int rowCount = grid.length;
    int colCount = grid[0].length;
    int score = (1 << (colCount - 1)) * rowCount; 

    for (int j = 1; j < colCount; j++) {
      int countOfOnes = 0;
      for (int i = 0; i < rowCount; i++) {
        countOfOnes += grid[i][j] ^ grid[i][0]; 
      }
      score += max(countOfOnes, rowCount - countOfOnes) * (1 << (colCount - j - 1));
    }

    return score;
  }
}

```