# C++ BFS/DSS

**Author:** jianchao-li
**Votes:** 45
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/231041/](https://leetcode.com/problems/number-of-distinct-islands/solutions/231041/)

---

I saw many people post DFS solutions but fewer BFS ones. So I wrote one below. Each time when I see a `1`, I visited all its 4 neighbors and record the two offsets with respect to the positions of the initial `1` for all `1` neighbors in a string.

```cpp
class Solution {
public:
    int numDistinctIslands(vector<vector<int>>& grid) {
        int m = grid.size(), n = m ? grid[0].size() : 0, offsets[] = {0, 1, 0, -1, 0};
        unordered_set<string> islands;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j]) {
                    grid[i][j] = 0;
                    string island;
                    queue<pair<int, int>> todo;
                    todo.push({i, j});
                    while (!todo.empty()) {
                        pair<int, int> p = todo.front();
                        todo.pop();
                        for (int k = 0; k < 4; k++) {
                            int r = p.first + offsets[k], c = p.second + offsets[k + 1];
                            if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c]) {
                                grid[r][c] = 0;
                                todo.push({r, c});
                                island += to_string(r - i) + to_string(c - j);
                            }
                        }
                    }
                    islands.insert(island);
                }
            }
        }
        return islands.size();
    }
};
```

The above idea can also be turned into a DFS one using recursion.

```cpp
class Solution {
public:
    int numDistinctIslands(vector<vector<int>>& grid) {
        int m = grid.size(), n = m ? grid[0].size() : 0;
        unordered_set<string> islands;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j]) {
                    string island;
                    distinct(grid, i, j, i, j, island);
                    islands.insert(island);
                }
            }
        }
        return islands.size();
    }
private:
    void distinct(vector<vector<int>>& grid, int i, int j, int r, int c, string& island) {
        int m = grid.size(), n = grid[0].size();
        if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c]) {
            grid[r][c] = 0;
            island += to_string(r - i) + to_string(c - j);
            distinct(grid, i, j, r - 1, c, island);
            distinct(grid, i, j, r + 1, c, island);
            distinct(grid, i, j, r, c - 1, island);
            distinct(grid, i, j, r, c + 1, island);
        }
    }
};
```