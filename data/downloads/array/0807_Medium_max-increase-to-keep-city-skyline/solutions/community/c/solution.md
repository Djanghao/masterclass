# C++ Simple and Short Solution, Faster than 98%

**Author:** YehudisK
**Votes:** 16
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/1362026/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/1362026/)

---

```
class Solution {
public:
    int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {
        int n = grid.size(), res = 0;
        vector<int> rows(n), cols(n);
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                rows[i] = max(rows[i], grid[i][j]);
                cols[j] = max(cols[j], grid[i][j]);
            }
        }
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                res += min(rows[i], cols[j]) - grid[i][j];
            }
        }
        
        return res;
    }
};
```
**Like it? please upvote!**