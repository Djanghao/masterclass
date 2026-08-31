# Simple java solution

**Author:** Siddhant_1602
**Votes:** 11
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5143754/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5143754/)

---

# Complexity
- Time complexity: $$O(m*n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public boolean satisfiesConditions(int[][] grid) {
        int m=grid.length, n=grid[0].length;
        for(int i=0; i<m-1; i++)
        {
            if(n>1)
            {
                for(int j=0; j<n-1; j++)
                {
                    if((grid[i][j] != grid[i+1][j]) || (grid[i][j] == grid[i][j+1]))
                    {
                        return false;
                    }
                }
            }
            else
            {
                if(grid[i][0] != grid[i+1][0])
                {
                    return false;
                }
            }
        }
        for(int j=0; j<n-1; j++)
        {
            if(grid[m-1][j] == grid[m-1][j+1])
            {
                return false;
            }
        }
        return true;
    }
}
```