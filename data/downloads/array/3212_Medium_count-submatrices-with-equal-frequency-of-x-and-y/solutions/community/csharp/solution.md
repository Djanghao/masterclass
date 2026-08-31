# Beats 100% , Keeping the count of X and Y from left and Top rectangle

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5982745/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5982745/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Keep count of x and y from left, and also add the count of x and y from rectangle just above the node.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int NumberOfSubmatrices(char[][] grid) {
        int rows = grid.Length;
        int cols = grid[0].Length;
        int[,] xvalue = new int[rows, cols];
        int[,] yvalue = new int[rows, cols];
        int count = 0;
        for(int i=0; i<rows;i++)
        {
            int vx = 0;
            int vy = 0;
            for(int j=0; j<cols;j++)
            {
                if (grid[i][j] == 'X')
                {
                    vx++;
                }
                if (grid[i][j] == 'Y')
                {
                    vy++;
                }
                xvalue[i,j] = vx;
                yvalue[i,j] = vy;
                if (i > 0)
                {
                    xvalue[i,j] += xvalue[i-1,j];
                    yvalue[i,j] += yvalue[i-1,j];
                }
                if (xvalue[i,j] > 0 && xvalue[i,j] == yvalue[i,j])
                {
                    count++;
                }
            }
        }
        return count;
    }
}
```