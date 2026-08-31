# yes

**Author:** dima31722
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/5317879/](https://leetcode.com/problems/count-servers-that-communicate/solutions/5317879/)

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
public class Solution {
    public int CountServers(int[][] grid) {
        int colLength = grid.GetLength(0);
        int rowLength = grid[0].Length;
        int[] rows = new int[rowLength];
        int[] cols = new int[colLength];
        int current = 0;
        for (int i = 0; i< colLength; i++)
        {
            for (int j = 0; j< rowLength; j++)
            {
                if (grid[i][j] == 1) { rows[j] += 1; cols[i] += 1; }
            }
        }

        for (int i = 0; i < colLength; i++)
        {
            for (int j = 0; j < rowLength; j++)
            {
                if (grid[i][j] == 1 && (rows[j] > 1 || cols[i] > 1)) { current++; }
            }
        }
        return current;
    }
}
```