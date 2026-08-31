# MOST OPTIMIZED C++ SOLUTION || O(1) SPACE

**Author:** tin_le
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/5081696/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/5081696/)

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
image.png
![image.png](./images/0.png)
# Code
```
class Solution {
public:
    int removeOnes(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        int res = INT_MAX;
        for(int i = 0; i < m; i++)
        {
            for(int j = 0; j < n; j++)
            {
                if(grid[i][j] == 1)
                {
                    for(int k = 0; k < m; k++)
                    {
                        grid[k][j] <<= 1;
                    }
                    for(int k = 0; k < n; k++)
                    {
                        grid[i][k] <<= 1;
                    }
                    res = min(res, 1 + removeOnes(grid));
                    for(int k = 0; k < m; k++)
                    {
                        grid[k][j] >>= 1;
                    }
                    for(int k = 0; k < n; k++)
                    {
                        grid[i][k] >>= 1;
                    }
                }
            }
        }
        return res == INT_MAX ? 0 : res;
    }
};
```