# C# | Prefix Sum

**Author:** icyrainz
**Votes:** 1
**Link:** [https://leetcode.com/problems/grid-game/solutions/3384257/](https://leetcode.com/problems/grid-game/solutions/3384257/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Calculate prefix sum of top row and bottom row.
Then for each column, check what is the maximum score of second robot if the first robot decides to go down at that point. This is done by comparing the sum between top right with (n-1) - i and bottom left (i-1).

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long GridGame(int[][] grid) {
        var n = grid[0].Length;
        var prefix1 = new long[n];
        var prefix2 = new long[n];

        prefix1[0] = grid[0][0];
        prefix2[0] = grid[1][0];
        for (var i = 1; i < n; i++) {
            prefix1[i] = prefix1[i-1] + grid[0][i];
            prefix2[i] = prefix2[i-1] + grid[1][i];
        }
        var score = Int64.MaxValue;
        for (var i = 0; i < n; i++) {
            var topRight = prefix1[n-1] - prefix1[i];
            var botLeft = i == 0 ? 0 : prefix2[i-1];
            score = Math.Min(score, Math.Max(topRight, botLeft));
        }

        return score;
    }
}
```