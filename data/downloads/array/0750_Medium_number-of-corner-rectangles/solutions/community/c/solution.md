# C++ solution, beats 98.69%, using bitset

**Author:** Monsooooon
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solutions/341872/](https://leetcode.com/problems/number-of-corner-rectangles/solutions/341872/)

---

The count() of 1s in the bitset is O(#1s), therefore this solution shoule be better than O(m^2 n)
```
int countCornerRectangles(vector<vector<int>>& grid) {
    if (grid.empty()) return 0;
    int m = grid.size(), n = grid[0].size();
    int ans = 0;
    vector<bitset<200>> lines(m);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j])
                lines[i].set(j);
        }
    }
    for (int i = 1; i < m; i++) {
        for (int k = 0; k < i; k++) {
            auto and_line = lines[i] & lines[k];
            int one_cnt = and_line.count();
            ans += one_cnt * (one_cnt - 1) / 2;
        }
    }
    return ans;
}
```