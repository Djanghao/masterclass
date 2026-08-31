# c++ solution using sorting and medien

**Author:** dilipsuthar60
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1513347/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1513347/)

---

```
class Solution {
public:
    int minOperations(vector<vector<int>>& grid, int x) {
        int n = grid.size(), m = grid[0].size(), mod = grid[0][0] % x;
        vector<int> v;
        for (auto &row : grid)
            for (int cell : row) {
                if (cell % x != mod)
				{
                    return -1;
				}
                v.push_back(cell / x);
            }
        sort(v.begin(), v.end());
        int mid = n * m / 2;
        int result= 0;
        for (int vi : v)
		{
            result += abs(vi - v[mid]);
		}
        return result;
    }
};
```