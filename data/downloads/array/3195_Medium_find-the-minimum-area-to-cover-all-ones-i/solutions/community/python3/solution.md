# C++ | Python | Easy to Understand | Greedy🔥✅

**Author:** Mainaaaaak
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355217/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355217/)

---

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minimumArea(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        int l = INT_MAX, u = INT_MAX;
        int r = INT_MIN, d = INT_MIN;

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < m; ++j) {
                if (grid[i][j] == 1) {
                    l = min(l, j);
                    u = min(u, i);
                    r = max(r, j);
                    d = max(d, i);
                }
            }
        }

        return (r - l + 1) * (d - u + 1);
    }
};
```
```python []
class Solution:
    def minimumArea(self, grid: List[List[int]]) -> int:
        n = len(grid)
        m = len(grid[0])
        l = u = sys.maxsize
        r = d = -sys.maxsize
        for i in range(n):
            for j in range(m):
                if grid[i][j] == 1:
                    l = min(l, j)
                    u = min(u, i)
                    r = max(r, j)
                    d = max(d, i)
        return (r-l+1)*(d-u+1)
```
