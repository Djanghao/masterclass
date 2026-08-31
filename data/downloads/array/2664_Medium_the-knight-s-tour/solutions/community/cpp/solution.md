# Normal DFS

**Author:** cpcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/3483449/](https://leetcode.com/problems/the-knights-tour/solutions/3483449/)

---

# Intuition
Just DFS.

# Approach
Just DFS

# Complexity
- Time complexity:
O((m * n)!)

- Space complexity:
O(1) (doesn't count input)

# Code
```
class Solution {
    bool dfs(int x, int y, int d, vector<vector<int>> &r) {
        if (d == r.size() * r[0].size()) {
            return true;
        }
        if (x < 0 || x >= r.size() || y < 0 || y >= r[0].size() || r[x][y] >= 0) {
            return false;
        }
        r[x][y] = d;
        const int dx[] = {1, 1, -1, -1, -2, -2, 2, 2};
        const int dy[] = {-2, 2, -2, 2, -1, 1, -1, 1};
        for (int i = 0; i < 8; ++i) {
            if (dfs(x + dx[i], y + dy[i], d + 1, r)) {
                return true;
            }
        }
        r[x][y] = -1;
        return false;

    }
public:
    vector<vector<int>> tourOfKnight(int m, int n, int r, int c) {
        vector<vector<int>> ans(m, vector<int>(n, -1));
        dfs(r, c, 0, ans);
        return ans;

    }
};
```