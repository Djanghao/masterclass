# C++ Hungarian that works with the updated test cases

**Author:** WangQiuc
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/1663225/](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/1663225/)

---

This problem is basically same as [1349. Maximum Students Taking Exam](https://leetcode.com/problems/maximum-students-taking-exam/). Most of the solutions in discussion use two DFSs but cannot pass the updated test cases. Two "chessboard" patterns for each connected component don't give the optimal solution as a once connected component can be broken into mulitple components.

We need to divide all the nodes into two groups and those nodes are a **subset** of all the `1` in the grid. If two nodes are adjacent, then there is an edge between them. Eventually we want to make sure no edge between any nodes within each group. We also want to find out the **maximum subset** as we want to flip as few `1` as possible So that's a **maximum bipartite matching** problem and we can use Hungarian to solve it. I have more explanation for Hungarian in another [post](https://leetcode.com/problems/maximum-students-taking-exam/discuss/764477/Python-A-Good-Practice-of-Hungarian).

Python solution timed out but C++ was able to pass.
```
class Solution {
public:
    int minimumOperations(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size(), cnt = 0;
        vector<pair<int, int> > D = {{-1,0},{1,0},{0,-1},{0,1}};
        vector<vector<int> > match(m, vector<int> (n, -1));
        vector<vector<int> > vis(m, vector<int> (n, -1));

        function<int(int,int,int)> dfs = [&](int i, int j, int v) {
            for (const auto &[di, dj] : D) {
                int x = i+di, y = j+dj;
                if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] && vis[x][y] != v) {
                    vis[x][y] = v;
					// found an augment path
                    if (match[x][y] == -1 || dfs(match[x][y]/n, match[x][y]%n, v)) {
                        match[x][y] = i*n+j;
                        match[i][j] = x*n+y;
                        return 1;
                    }
                }
            }
            return 0;
        };

        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) if (grid[i][j] && match[i][j] == -1)
                cnt += dfs(i, j, vis[i][j] = i*n+j);
        return cnt;
    }
};
```

Update:
I found this problem really set a tight time limit. Even for C++, if you set the sequence of visiting node's neighbors as `DIR = {{0,1},{0,-1},{-1,0},{1,0}}`, the above solution would get a TLE.