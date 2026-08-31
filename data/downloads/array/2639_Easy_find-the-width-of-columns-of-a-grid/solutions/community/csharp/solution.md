# C#, ToString

**Author:** CDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420276/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420276/)

---

# Complexity
- Time complexity: $$O(m*n)$$

- Space complexity: $$O(1)$$ 

# Code
```
public class Solution 
{
    public int[] FindColumnWidth(int[][] grid) 
    {
        int m = grid.Length;
        int n = grid[0].Length;
        int[] result = new int[n];
        for (int i = 0; i < n; i++)
        {
            int lenght = 0;
            for (int j = 0; j < m; j++)
            {
                lenght = Math.Max(lenght, grid[j][i].ToString().Length);
            }
            result[i] = lenght;
        }
        return result;
    }
}
```