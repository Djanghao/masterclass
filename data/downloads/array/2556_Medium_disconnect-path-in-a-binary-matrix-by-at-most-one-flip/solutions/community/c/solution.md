# Priority of directions

**Author:** votrubac
**Votes:** 20
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3154733/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3154733/)

---

Our search starts from points `[0, 1]` - left, and `[1,0]` - down. We search for two non-intersecting paths from those points.

For the first search, we try to go left first. We go down only if we cannot reach the last cell by going left.

For the second search, the priority of direction is flipped - we go down first.

That way, the first path is closest to the top-right borders of the grid, and the second path - to the bottom-left border.

If we find both paths, then we cannot make the matrix disconnected.

> When we traverse a path, we change values in the matrix to zero, so we cannot reuse the same cell the second time.

As [Chasey](https://leetcode.com/Chasey/) noted, since we flip values for the first path, we do not even need to flip directions for the second one.

This simplifies the code, and paves a way for generalized problem when we need to find more than two paths. 

**C++**
```cpp
bool dfs(vector<vector<int>>& g, int i, int j) {
    int m = g.size(), n = g[0].size();
    if (i == m || j == n || g[i][j] == 0)
        return false;
    if (i == m - 1 && j == n - 1)
        return true;
    if (i != 0 || j != 0)
        g[i][j] = 0;
    return dfs(g, i, j + 1) || dfs(g, i + 1, j);
}
bool isPossibleToCutPath(vector<vector<int>>& g) {
    return !(dfs(g, 0, 0) && dfs(g, 0, 0));
}
```