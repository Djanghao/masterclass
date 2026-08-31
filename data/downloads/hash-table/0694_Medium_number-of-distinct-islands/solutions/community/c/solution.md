# C++ DFS  Solution

**Author:** Saravanakumar_dharmaraj
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/596076/](https://leetcode.com/problems/number-of-distinct-islands/solutions/596076/)

---

```
class Solution {
public:
    void dfs(vector<vector<int>> &grid, int r, int c, string &s) {
        if(r < 0 || r >= grid.size() || c < 0 || c >= grid[0].size() || grid[r][c] == 0) {
            return;
        }
        grid[r][c] = 0;
        vector<vector<int>> dir{{0,1},{0,-1}, {1,0}, {-1,0}};
        vector<string> path{"r", "l", "d", "u"};
        int k = 0;
        for(auto &d : dir) {
            s += path[k];
            dfs(grid, r + d[0], c + d[1], s);
        }
        s += "e"; // end
    }
    int numDistinctIslands(vector<vector<int>>& grid) {
        int count = 0;
        unordered_set<string> uset;
        for(int r = 0; r < grid.size(); ++r) {
            for(int c = 0; c < grid[0].size(); ++c) {
                if(grid[r][c] == 1) {
                    string s = "s"; // start
                    dfs(grid, r, c, s);
                    cout << s << endl;
                    uset.insert(s);
                }
            }
        }
        return uset.size();
    }
};
```