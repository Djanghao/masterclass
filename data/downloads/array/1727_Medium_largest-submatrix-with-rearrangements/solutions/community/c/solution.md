# [C++] count 1s and then sort

**Author:** ddddyliu
**Votes:** 6
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/1020601/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/1020601/)

---

```
class Solution {
public:
    int largestSubmatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        vector<vector<int>> cntOne(m, vector<int>(n, 0));
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 1) {cntOne[0][j] = 1;}
        }
        for (int i = 1; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 0) {cntOne[i][j] = 0;}
                else {cntOne[i][j] = cntOne[i - 1][j] + 1;}
            }
        }
        
        int ans = 0;
        for (int i = 0; i < m; i++) {
            vector<int> curr = cntOne[i];
            sort(curr.begin(), curr.end(), greater());
            for (int j = 0; j < n; j++) {
                ans = max(ans, curr[j] * (j + 1));
            }
        }
        return ans;
    }
};
```