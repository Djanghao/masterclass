# C++ | DFS & Backtracking | With Intuition, Approach and Comments

**Author:** jatin1510
**Votes:** 34
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/2974068/](https://leetcode.com/problems/unique-paths-iii/solutions/2974068/)

---

# Intuition
As constraints are very less, we will try to implement it by exploring all possibilities from the each cell.

# Approach
We will keep count of empty cell `grid[i][j] == 0` in the variable `empty` and will have the start and end destination stored in the pair of integers `src` and `dest`.

We start the call from `{src.first, src.second, empty}`. Now for all `grid[i][j]` we have 4 possible directions. We will try all that and will see that anyone of that is yielding the desired solution or not. 

### State = `dfs(i, j, left)`

At this state, we are currently on the cell {i, j} and have the emplty cells as `left`. 

First of all let's mark this cell as visited by assigning it the value of an obstacle. (for backtracking)

Now initialize the `ans as 0` and iterate over all possible direction from the current cell. if the direction is valid and is not an obstacle then we will add the ans of that direction our current ans. Remember we have taken this cell in the path so the empty cell would now be equal to `left - 1`.

In short, `ans += dfs(x, y, left - 1);`

After enumerating all the direction, we have to mark current cell as empty cell for the process of `backtracking`.

### Base Case = `dfs(i, j, left)`
If we have used all the empty cell i.e., `left == -1` and are at the destination, then we found the correct 4-directional walks. So return 1 for this state.

# Code
```
class Solution {
    // Dimensions 
    int m, n;

    // Direction Vectors
    vector<int> dx = {-1, 1, 0, 0};
    vector<int> dy = {0, 0, -1, 1};

public:
    // function to check for the validity of CELLij
    bool isvalid(int i, int j)
    {
        return i >= 0 and j >= 0 and i < m and j < n;
    }

    int dfs(int i, int j, int left, pair<int, int> dest, vector<vector<int>> &grid)
    {
        // Base case
        if (left == -1 and pair<int, int>(i, j) == dest)
            return 1;

        // Mark visited
        grid[i][j] = -1;

        int ans = 0;
        for (int k = 0; k < 4; k++)
        {
            int x = i + dx[k];
            int y = j + dy[k];

            // Add up all possibilities to answer
            if (isvalid(x, y) and grid[x][y] != -1)
                ans += dfs(x, y, left - 1, dest, grid);
        }

        // Backtrack
        grid[i][j] = 0;

        return ans;
    }

    int uniquePathsIII(vector<vector<int>> &grid)
    {
        m = grid.size(), n = grid[0].size();

        pair<int, int> src, dest;
        int empty = 0;

        for (int i = 0; i < m; i++)
        {
            for (int j = 0; j < n; j++)
            {
                if (grid[i][j] == 0)
                    empty++;
                if (grid[i][j] == 1)
                    src = {i, j};
                if (grid[i][j] == 2)
                    dest = {i, j};
            }
        }

        return dfs(src.first, src.second, empty, dest, grid);
    }
};
```

If you like it, Please Upvote !!. Also check my [repo](https://github.com/jatin1510/Templates) for amazing templates of CP and DSA.