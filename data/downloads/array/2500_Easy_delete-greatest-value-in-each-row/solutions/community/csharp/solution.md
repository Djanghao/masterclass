# C#

**Author:** ChangDaze
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/3118339/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/3118339/)

---

# Intuition
Sort each row
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Sort each row, and compare reach row by column
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:?
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution
        {
            public int DeleteGreatestValue(int[][] grid)
            {
                int result = 0;
                foreach (int[] row in grid)
                {
                    Array.Sort(row);
                }

                for(int i = 0; i < grid[0].Length ; i++)
                {
                    int max = 0;
                    for(int j = 0;j<grid.Length ;j++)
                    {
                        if (max < grid[j][i])
                            max = grid[j][i]; 
                    }
                    result = result + max;
                }

                return result;
            }
        }
```