# Simple C++ Solution

**Author:** bdwan
**Votes:** 51
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/346351/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/346351/)

---

1\u3001calculate the distance
2\u3001sort by distance
3\u3001remove the distance

```
class Solution {
public:
    vector<vector<int>> allCellsDistOrder(int R, int C, int r0, int c0) {
        vector<vector<int>> ans;
        for (int i = 0; i < R; i++)
            for (int j = 0; j < C; j++)
                ans.push_back({i, j, abs(i - r0) + abs(j - c0)});

        sort(ans.begin(), ans.end(), [](vector<int>& c1, vector<int>& c2) {
            return c1[2] < c2[2];
        });

        for (vector<int>& d: ans) 
            d.pop_back();

        return ans;
    }
};
```