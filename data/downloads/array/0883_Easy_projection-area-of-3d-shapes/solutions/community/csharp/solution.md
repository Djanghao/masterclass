# c# math

**Author:** rajeshkumar1130
**Votes:** 0
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/5988838/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/5988838/)

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
```csharp []
public class Solution {
    public int ProjectionArea(int[][] grid) {
        int n = grid.Length;
        int ans = 0;

        for(int i = 0;i<n;i++)
        {
            int rowmax = 0;
            int colmax = 0;
            for(int j = 0;j<n;j++)
            {
                rowmax = Math.Max(rowmax, grid[i][j]);
                colmax = Math.Max(colmax, grid[j][i]);

                if(grid[i][j] >0) ans++;
            }
            ans+=rowmax+colmax;
        }

        return ans;
    }
}
```