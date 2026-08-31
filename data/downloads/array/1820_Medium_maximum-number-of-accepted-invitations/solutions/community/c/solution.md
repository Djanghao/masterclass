# C++ Hungarian solution

**Author:** ShuaSomeTea
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/1465655/](https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/1465655/)

---

Refered to this [blog](https://zhuanlan.zhihu.com/p/96229700). 
```
class Solution {
public:
    int p[201];
    bool v[201];
    bool match(int i, int n, vector<vector<int>> const& g) {
        // find match for left node i in unvisited right nodes 
        for (int j = 1; j <= n; j++) {
            // connected and unvisited
            if (g[i - 1][j - 1] and !v[j]) {
                v[j] = true;
                // not matched or could find another match
                if (p[j] == 0 or match(p[j], n, g)) {
                    p[j] = i;
                    return true;
                }
            }
        }
        return false;
    }
    
    int maximumInvitations(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        int count = 0;
        for (int i = 1; i <= m; i++) {
            memset(v, 0, n + 1);
            if (match(i, n, grid)) count++;
        }
        return count;
    }
};
```