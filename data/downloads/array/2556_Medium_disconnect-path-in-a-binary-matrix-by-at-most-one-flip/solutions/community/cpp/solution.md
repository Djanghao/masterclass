# Explained - Run DFS 2 times || Very simple and easy to Understand Solution

**Author:** kreakEmp
**Votes:** 151
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3141656/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3141656/)

---

UP vote if you like the solution !!!
# Approach
There are two cases:
1. When there is no path at all from (0,0) to (m-1, n-1) position, so simply return true;
2. When there is one path but after fliping one value we will not able to reach the destination.
   - In the first traversal we will simply set all trqavesed node to 0
   - By doing this, if there is any alternate path thats not depends on the first one then 
     its not possible to flip a single value to 0 and we won't be reaching.
     
# Complexity
- Time complexity: O(M * N)

- Space complexity: O(1)

# Code
```
class Solution {
public:
    bool dfs(vector<vector<int>> &grid, int i, int j){ 
        if(i+1 == grid.size() && j+1 == grid[0].size()) return true;
        if(i >= grid.size() || j >= grid[0].size() || grid[i][j] == 0) return false;
        grid[i][j] = 0;
        return dfs(grid, i+1, j) || dfs(grid, i, j+1);
    }

    bool isPossibleToCutPath(vector<vector<int>>& grid) { 
        if(dfs(grid, 0, 0) == false) return true;
        grid[0][0] = 1;
        return !dfs(grid, 0, 0);
    }
};
```

Here is an article of my recent interview experience at Amazon, you may like : 
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted