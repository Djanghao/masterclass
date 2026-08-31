# Clean Looking Simple Solution C# ✅

**Author:** alexvenmil
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/4344096/](https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/4344096/)

---

# Complexity
![image.png](./images/0.png)


# Code
```
public class Solution {
    public bool CheckXMatrix(int[][] grid) 
    {
        for (int i = 0; i < grid.Length; i++)
        {
            for (int j = 0; j < grid[i].Length; j++)
            {
                if ((grid[i][j] == 0) == (i == j || i + j == grid.Length - 1)) 
                {
                    return false;
                }
            }
        }

        return true;
    }
}
```