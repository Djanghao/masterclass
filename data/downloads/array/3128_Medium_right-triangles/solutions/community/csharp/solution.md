# Clean, readable solution

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/right-triangles/solutions/5487938/](https://leetcode.com/problems/right-triangles/solutions/5487938/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m*n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
public class Solution {
    public long NumberOfRightTriangles(int[][] grid) {
        int row = grid.Length, col = grid[0].Length;
        int[] sumR = new int[row];
        int[] sumC = new int[col];
        long res = 0L;

        for(int i = 0; i < row; i++)
        {
            for(int j = 0; j < col; j++)
            {
                sumR[i] += grid[i][j];
                sumC[j] += grid[i][j];
            }
        }

        for(int i = 0; i < row; i++)
        {
            for(int j = 0; j < col; j++)
            {
                if(grid[i][j] == 1)
                {
                    if(sumR[i] > 1 && sumC[j] > 1)
                        res += (sumR[i]-1)*(sumC[j]-1);
                }
            }
        }

        return res;
    }
}
```