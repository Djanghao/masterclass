# [C++] Brute Force || but Couldn't solved in Time

**Author:** Pathak_Ankit
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4024752/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4024752/)

---

Couldn't solved in contest!Very disappointed
# Intuition
Brute Force
Try all possiblities
# Approach
just using Brute Force

This code is an implementation of a recursive algorithm to find the minimum number of moves required to place one stone in each cell of a 3x3 grid, where each cell can have multiple stones.


1. The `Solution` class defines a 2D vector called `ref`, which represents the ideal configuration of the grid where each cell has one stone. `ref` is initialized to a 3x3 matrix filled with ones.

2. The `help` function is a recursive function that takes a `grid` as input and returns the minimum number of moves required to reach the ideal configuration (represented by `ref`).

3. Inside the `help` function:
   - If the current `grid` is the same as the ideal configuration (`grid == ref`), it means we have achieved the desired state, so the function returns 0.

   - `ans` is initialized to a large value (30) to keep track of the minimum number of moves needed.

   - The code uses four nested loops (i, j, k, l) to iterate through all possible pairs of cells in the grid.

   - It checks if `grid[i][j]` is empty (contains 0 stones) and `grid[k][l]` has more than one stone (`grid[k][l] > 1`). If this condition is met, it means we can move a stone from `grid[k][l]` to `grid[i][j]`.

   - The code simulates this move by incrementing `grid[i][j]` and decrementing `grid[k][l]`. It then recursively calls the `help` function with the updated `grid` to continue searching for the minimum number of moves.

   - After the recursive call, it calculates the total moves required for this move and stores it in `ans`.

   - Finally, it undoes the move by decrementing `grid[i][j]` and incrementing `grid[k][l]` to explore other possible moves.

4. The `minimumMoves` function simply calls the `help` function with the input `grid` and returns the result.

In essence, this code explores all possible moves in a recursive manner, keeping track of the minimum number of moves required to reach the ideal configuration. It backtracks after each move to explore other possibilities until it finds the minimum number of moves needed to solve the problem.
```
class Solution {
    
public:
    vector<vector<int>> ref = {{1,1,1},{1,1,1},{1,1,1}};
    int help(vector<vector<int>>& grid)
    {
        if(grid==ref)
            return 0;
        int ans = 30;
        for(int i = 0;i<3;i++)
        {
            for(int j = 0; j<3;j++)
            {
                for(int k = 0 ; k<3;k++)
                {
                    for(int l = 0;l<3;l++)
                    {
                        if(grid[i][j]==0 && grid[k][l]>1)
                        {
                            grid[i][j]++;
                            grid[k][l]--;
                            ans = min(ans,abs(i-k)+abs(j-l)+help(grid));
                            grid[i][j]--;
                            grid[k][l]++;
                        }
                    }
                }
            }
        }
        return ans; 
    }
    int minimumMoves(vector<vector<int>>& grid) {
        return help(grid);
    }
};
```