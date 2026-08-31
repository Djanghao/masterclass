# DFS + BFS

**Author:** tkwind
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/6029509/](https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/6029509/)

---

# Intuition
DFS for connectivity, while BFS for shortest distance

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
/**
 * // This is the GridMaster's API interface.
 * // You should not implement it, or speculate about its implementation
 * class GridMaster {
 *   public:
 *     bool canMove(char direction);
 *     void move(char direction);
 *     boolean isTarget();
 * };
 */

class Solution {
public:
    int findShortestPath(GridMaster &master) {
        // mem.resize(1001, vector<int>(1001, -1));
        for (int i = 0; i < 1001; ++i)
            for (int j = 0; j < 1001; ++j)
                grid[i][j] = -1;
        bool found_target = dfs(500, 500, master);
        return found_target ? bfs(): -1;
    }

private:
    int grid[1001][1001];
    vector<vector<int>> dirs = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
    char dir_names[4] = {'U','L','D','R'};
    int bounds[4] = {0, 0, 1001, 1001};
    // note: directly using dfs for shortest distance may result in cycle
    //       therefore, we first apply dfs to identify the connectivity to target
    //.      and then apply bfs for the shortest distance
    //.      another way is to record the path, but it is very inconvenient to do so
    bool dfs(int x, int y, GridMaster &master) {
        
        bool ans = false;
        grid[x][y] = master.isTarget() ? 2: 1;
        if (grid[x][y] == 2) ans = true;
        
        for (int l = 0; l < 4; ++l) {
            int dx = dirs[l][0], dy = dirs[l][1];
            if (!master.canMove(dir_names[l])) grid[x + dx][y + dy] = 0;
            // if already visited or cannot move, skip
            if (grid[x + dx][y + dy] >= 0) continue;
            master.move(dir_names[l]);
            ans |= dfs(x + dx, y + dy, master);
            master.move(dir_names[(l + 2) % 4]);
        }
        return ans;
    }
    int bfs() {
        int ans = 0; 
        queue<vector<int>> que;
        que.push({500, 500});
        while (!que.empty()) {
            int n = que.size(), x, y;
            ans += 1;
            for (int i = 0; i < n; ++i) {
                for (int l = 0; l < 4; ++l) {
                    x = que.front()[0] + dirs[l][0], y = que.front()[1] + dirs[l][1];
                    if (grid[x][y] < 1) continue;
                    if (grid[x][y] == 2) return ans;
                    grid[x][y] = -1;
                    que.push({x, y});  
                }
                que.pop();
            }
        }
        return -1;
    }
};


```