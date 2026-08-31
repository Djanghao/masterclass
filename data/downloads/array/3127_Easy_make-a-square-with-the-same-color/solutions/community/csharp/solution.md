# ✅Beats 100.00% 🔥 || Java || C++ || C# || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5080205/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5080205/)

---

![image.png](./images/0.png)
# Intuition
The problem aims to determine whether it is possible to form a square using the given grid of characters. A square can be formed if there exists a 2x2 subgrid in the given grid where all the characters are the same.

# Approach
The approach is to iterate through the **grid** and check for each 2x2 **subgrid** if all the characters in that **subgrid** are the same. If such a **subgrid** is found, the function returns **true**, indicating that a square can be formed. If no such subgrid is found after iterating through the entire grid, the function returns **false**.

# Complexity
- Time complexity: **O(mn)**
where m and n are the dimensions of the input grid.

- Space complexity: **O(1)**
Uses only a constant amount of extra space to store temporary variables during the iteration process.

```Java []
class Solution {
    public boolean canMakeSquare(char[][] grid) {
        for (var i = 0; i < grid.length - 1; i++)
            for (var j = 0; j < grid[0].length - 1; j++)
                if( (grid[i][j] == grid[i + 1][j] && grid[i][j] == grid[i][j + 1]) ||
                    (grid[i][j] == grid[i + 1][j + 1] && grid[i][j] == grid[i][j + 1]) ||
                    (grid[i][j] == grid[i + 1][j] && grid[i][j] == grid[i + 1][j + 1]) ||
                    (grid[i][j + 1] == grid[i + 1][j + 1] && grid[i][j + 1] == grid[i + 1][j]))
                    return true;           
        return false;
    }
}
```
```C++ []
class Solution {
public:
    bool canMakeSquare(vector<vector<char>>& grid) {
        for (int i = 0; i < grid.size() - 1; i++)
            for (int j = 0; j < grid[0].size() - 1; j++)
                if( (grid[i][j] == grid[i + 1][j] && grid[i][j] == grid[i][j + 1]) ||
                    (grid[i][j] == grid[i + 1][j + 1] && grid[i][j] == grid[i][j + 1]) ||
                    (grid[i][j] == grid[i + 1][j] && grid[i][j] == grid[i + 1][j + 1]) ||
                    (grid[i][j + 1] == grid[i + 1][j + 1] && grid[i][j + 1] == grid[i + 1][j]))
                    return true;           
        return false;
    }
};
```
```C# []
public class Solution {
    public bool CanMakeSquare(char[][] grid) {
        
        for (var i = 0; i < grid.Length - 1; i++)
            for (var j = 0; j < grid[0].Length - 1; j++)
                if( (grid[i][j] == grid[i + 1][j] && grid[i][j] == grid[i][j + 1]) ||
                    (grid[i][j] == grid[i + 1][j + 1] && grid[i][j] == grid[i][j + 1]) ||
                    (grid[i][j] == grid[i + 1][j] && grid[i][j] == grid[i + 1][j + 1]) ||
                    (grid[i][j + 1] == grid[i + 1][j + 1] && grid[i][j + 1] == grid[i + 1][j]))
                    return true;           
        return false;
    }
}
```
![image.png](./images/1.png)
