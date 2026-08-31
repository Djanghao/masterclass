# Sort Rows

**Author:** votrubac
**Votes:** 45
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2899965/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2899965/)

---

We sort all rows first, then go column by column and pick the largest value.

**Python 3**
```python
class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        return sum(max(c) for c in zip(*[sorted(r) for r in grid]))
```

**C++**
```cpp
int deleteGreatestValue(vector<vector<int>>& g) {
    int res = 0, si = g.size(), sj = g[0].size();
    for (auto &r : g)
        sort(begin(r), end(r));
    for (int j = 0; j < sj; ++j) {
        int max_row = 0;
        for (int i = 0; i < si; ++i) 
            max_row = max(max_row, g[i][j]);
        res += max_row;
    }
    return res;
}
```