# Two Hash Maps

**Author:** votrubac
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5207426/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5207426/)

---

The first hash map stores the color of each ball (`ball_col`).

The second one stores count of balls of each color (`col_cnt`).

When we color the ball, we first check if the ball has some color already.

If so, we decrease count of that color, and remove it from `col_cnt` when the count is zero.

For each query, the answer is the size of `col_cnt`.

**C++**
```cpp
vector<int> queryResults(int limit, vector<vector<int>>& queries) {
    vector<int> res;
    unordered_map<int, int> ball_col, col_cnt;
    for (auto &q : queries) {
        int x = q[0], y = q[1];
        int col = ball_col[x];
        if (col && --col_cnt[col] == 0)
            col_cnt.erase(col);
        ball_col[x] = y;
        ++col_cnt[y];
        res.push_back(col_cnt.size());
    }
    return res;
}
```