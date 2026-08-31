# ✅ Easy Solution Beats 100%

**Author:** kalyan_inumula
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5786701/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5786701/)

---

# \uD83E\uDDE0 Intuition
The problem is similar to a pathfinding challenge where we need to find a safe path from the top-left corner to the bottom-right corner of the grid. The grid contains obstacles (represented by 1s), which reduce the health of the traveler. The goal is to reach the destination with at least 1 health point remaining.

# \uD83D\uDEE0\uFE0F Approach
- We use a **priority queue** to perform a modified BFS/DFS where each state is represented by the remaining health and the current position `(row, col)`. 
- The traversal starts from the top-left corner, and we push the health value based on whether there is an obstacle at the starting point.
- The traversal explores four possible directions: up, down, left, and right. 
- If the next cell is an obstacle, health is reduced, and if it's not, health remains the same.
- The process continues until the bottom-right corner is reached with health \u2265 1.

# \u23F3 Complexity

- Time complexity:  
  The time complexity is approximately **O(n \\* m)**, where `n` is the number of rows and `m` is the number of columns in the grid. This is because each cell is processed once, and the priority queue maintains the maximum health for each position.

- Space complexity:  
  The space complexity is **O(n \\* m)**, which accounts for the visited array and the priority queue storing the grid's cells.



# Code
```cpp []
class Solution {
public:
    bool findSafeWalk(vector<vector<int>>& grid, int health) {
        int n=grid.size();
        int m=grid[0].size();
        priority_queue<pair<int,pair<int,int>>, vector<pair<int,pair<int,int>>>>qu;  //height : {row,col}
        vector<vector<int>>vis(n,vector<int>(m,0));
        if(grid[0][0]==1){
            qu.push({health-1,{0,0}});
        }
        else{
        qu.push({health,{0,0}});
        }
        vis[0][0]=1;
        
        while(!qu.empty()){
            int val=qu.top().first;
            int row=qu.top().second.first;
            int col=qu.top().second.second;

            if(row==n-1 && col==m-1){
                if(val>=1){
                    return true;
                }
            }

            qu.pop();
            int drow[4]={0,-1,0,1};
            int dcol[4]={-1,0,1,0};
            

            for(int i=0;i<4;i++){
                int n_row=row+drow[i];
                int n_col=col+dcol[i];
                if(n_row>=0 && n_row<n && n_col>=0 && n_col<m  &&  !vis[n_row][n_col] && grid[n_row][n_col]==0){
                    vis[n_row][n_col]=1;
                    qu.push({val,{n_row,n_col}});
                }
                else if (n_row>=0 && n_row<n && n_col>=0 && n_col<m  &&  !vis[n_row][n_col] && grid[n_row][n_col]!=0){
                    vis[n_row][n_col]=1;
                    qu.push({val-1,{n_row,n_col}});
                }
            }
        }

        return false;

    }
};
```