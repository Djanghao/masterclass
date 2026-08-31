# Single Nested Loop

**Author:** mansoorafzal
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/6084325/](https://leetcode.com/problems/find-champion-i/solutions/6084325/)

---

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```csharp []
public class Solution {
    public int FindChampion(int[][] grid) {
        int n = grid.Length;

        int team = -1;
        int max = -1;
        int[] teams = new int[n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                teams[i] += grid[i][j];

                if (teams[i] > max) {
                    max = teams[i];
                    team = i;
                }
            }
        }

        return team;
    }
}
```