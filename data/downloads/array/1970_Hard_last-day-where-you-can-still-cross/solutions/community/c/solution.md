# Two Union-Find Approaches

**Author:** votrubac
**Votes:** 40
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/1404313/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/1404313/)

---

#### Approach 1: Track Land

Here, we start with all water (end state). As pointed out by [YejingWang](https://leetcode.com/YejingWang/), `cells.length == row * col`, it is just all water in the end.
 
Then, we replace water with land processing `cells` right-to-left. We join newly emerged cells with surrounding land in four directions. 
 
> We do not need to track water land in a separate grid, we can do it directly in the disjoint set `ds`. We use 'INT_MIN' to indicate that there is water in that cell.
 
Finally, we detect if any top cell is in the same set as any bottom cell. For that, we use a trick. When performing a join operation, we always pick a smaller element as the new parent. That way, if we see that a parent for any of the bottom cells is less than `c`, that cell is connected to a top cell - and we are done!
> Update: [louisfghbvc](https://leetcode.com/louisfghbvc/) came up with the dummy node approach, when you connect cells in the top row to a `top` dummy node, and cells in the bottom - to a `bottom` dummy node. Then we can just check if `top` and `bottom` are in the same group. This is more efficient and allow us to use ranking, so I updated solutions below.

**C++**
```cpp
int dirs[5] = {0, 1, 0, -1, 0}, ds[20003] = {[0 ... 20000] = INT_MIN};
int find(int i) {
    return ds[i] < 0 ? i : ds[i] = find(ds[i]);
}
int latestDayToCross(int row, int col, vector<vector<int>>& cs) {
    int top = row * col, bottom = row * col + 1;
    ds[top] = ds[bottom] = - row;
    for (int idx = cs.size() - 1; idx >= 0; --idx) {
        int i = cs[idx][0] - 1, j = cs[idx][1] - 1;
        ds[i * col + j] = i == 0 ? top : i == row - 1 ? bottom : -1;
        for (int d = 0; d < 4; ++d) {
            int x = i + dirs[d], y = j + dirs[d + 1];
            if (x < 0 || y < 0 || x >= row || y >= col || ds[x * col + y] == INT_MIN)
                continue;
            int p1 = find(i * col + j), p2 = find(x * col + y);
            if (p1 != p2) {
                if (ds[p1] > ds[p2])
                    swap(p1, p2);
                ds[p1] += ds[p2];
                ds[p2] = p1;              
            }
        }
        if (find(top) == find(bottom))
            return idx;        
    }
    return -1;
}  
```

#### Approach 2: Track Water
This is similar to the previous solution, but here we track when water "connects" the left and right sides of the grid. When it happens we cannot cross anymore.

For that, we start with all land and add water cells left-to-right. Another notable difference is that the water cells connect to each other in 8 directions, not in 4 directions.

**C++**
```cpp
int dirs[10] = {0, 1, 0, -1, 0, 1, 1, -1, -1, 1};
int find(vector<int> &ds, int i) {
    return ds[i] < 0 ? i : ds[i] = find(ds, ds[i]);
}
int latestDayToCross(int row, int col, vector<vector<int>>& cs) {
    vector<int> ds(row * col + 2, INT_MIN);
    int left = row * col, right = row * col + 1;
    ds[left] = ds[right] = - col;
    for (int idx = 0; idx < cs.size(); ++idx) {
        int i = cs[idx][0] - 1, j = cs[idx][1] - 1;
        ds[j * row + i] = j == 0 ? left : j == col - 1 ? right : -1;
        for (int d = 0; d < 9; ++d) {
            int x = i + dirs[d], y = j + dirs[d + 1];
            if (x < 0 || y < 0 || x >= row || y >= col || ds[y * row + x] == INT_MIN)
                continue;
            int p2 = find(ds, y * row + x), p1 = find(ds, j * row + i);
            if (p1 != p2) {
                if (ds[p1] > ds[p2])
                    swap(p1, p2);
                ds[p1] += ds[p2];
                ds[p2] = p1;
            }
        }
        if (find(ds, left) == find(ds, right))
            return idx;      
    }
    return -1;
}
```