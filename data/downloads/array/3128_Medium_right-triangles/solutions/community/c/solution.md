# [C++] 2 Pass, O(MN) Runtime, O(M+N) Memory

**Author:** amanmehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/right-triangles/solutions/5083404/](https://leetcode.com/problems/right-triangles/solutions/5083404/)

---

```
class Solution {
public:
    long long numberOfRightTriangles(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        vector<int> rc(m);
        vector<int> cc(n);
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    rc[i]++;
                    cc[j]++;
                }
            }
        }
        long long result = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    result += (rc[i] - 1) * (cc[j] - 1);
                }
            }
        }
        return result;
    }
};
```