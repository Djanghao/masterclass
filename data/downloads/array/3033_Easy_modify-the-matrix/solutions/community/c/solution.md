# O(1) Memory

**Author:** votrubac
**Votes:** 15
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/4708856/](https://leetcode.com/problems/modify-the-matrix/solutions/4708856/)

---

We go colump by column, so we do not have to store max for all columns.

> Bonus: check out the second solution that does not scan the whole row again to update `-1` cells.
> Instead, it makes all `-1` cells into a "linked list", and only updates those cells.

**C++**
```cpp
vector<vector<int>> modifiedMatrix(vector<vector<int>>& m) {
    for (int j = 0; j < m[0].size(); ++j) {
        int mx = -1;
        for (int i = 0; i < m.size(); ++i)
            mx = max(mx, m[i][j]);
        for (int i = 0; i < m.size(); ++i)
            m[i][j] = m[i][j] == -1 ? mx : m[i][j];
    }
    return m;
}
```
## Second Scan Optimization
Instead of going through all cells again and update `-1` cells, we only go though `-1` cells.

We do not even need to store indices of those cells.

Instead, we link those cells by storing the index of the previous `-1` cell in the next `-1` cell.

**C++**
```cpp
vector<vector<int>> modifiedMatrix(vector<vector<int>>& m) {
    for (int j = 0; j < m[0].size(); ++j) {
        int mx = -1, id = -1;
        for (int i = 0; i < m.size(); ++i) {
            mx = max(mx, m[i][j]);
            if (m[i][j] == -1)
                m[i][j] = exchange(id, i);
        }
        while (id != -1 && mx != -1) {
            int tmp = m[id][j];
            m[id][j] = mx;
            id = tmp;
        }
    }
    return m;
}
```