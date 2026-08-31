# C++ BFS and DFS

**Author:** jianchao-li
**Votes:** 38
**Link:** [https://leetcode.com/problems/max-area-of-island/solutions/251369/](https://leetcode.com/problems/max-area-of-island/solutions/251369/)

---

**BFS**

```cpp
class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int m = grid.size(), n = m ? grid[0].size() : 0, area = 0, offsets[] = {0, 1, 0, -1, 0};
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j]) {
                    int a = 1;
                    grid[i][j] = 0;
                    queue<pair<int, int>> todo;
                    todo.push({i, j});
                    while (!todo.empty()) {
                        pair<int, int> p = todo.front();
                        todo.pop();
                        for (int k = 0; k < 4; k++) {
                            int r = p.first + offsets[k], c = p.second + offsets[k + 1];
                            if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c]) {
                                grid[r][c] = 0;
                                a++;
                                todo.push({r, c});
                            }
                        }
                    }
                    area = max(area, a);
                }
            }
        }
        return area;
    }
};
```

**DFS**

```cpp
class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int m = grid.size(), n = m ? grid[0].size() : 0, area = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j]) {
                    int a = 0;
                    computeArea(grid, i, j, a);
                    area = max(area, a);
                }
            }
        }
        return area;
    }
private:
    void computeArea(vector<vector<int>>& grid, int i, int j, int& a) {
        int m = grid.size(), n = grid[0].size();
        if (i >= 0 && i < m && j >= 0 && j < n && grid[i][j]) {
            a++;
            grid[i][j] = 0;            
            computeArea(grid, i - 1, j, a);
            computeArea(grid, i + 1, j, a);
            computeArea(grid, i, j - 1, a);
            computeArea(grid, i, j + 1, a);
        }
    }
};
```