# DFS + Top-Down DP

**Author:** votrubac
**Votes:** 72
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/1803899/](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/1803899/)

---

This problem is definitely Hard. It's not trivial to figure out how to apply DP here.

The idea is to break this problem into two parts:
- Find all possible ways to build a  single row.
	- We can use DFS for that, and store each row as a bit mask.
- Arrange rows into a wall, counting valid row arrangements.
	- We can use DP, and I think that a top-down DP is a bit easier to understand.

**C++**
> Note: we can build a transition list to optimize the runtime (see below).

```cpp
int dp[101][1024] = {};
int dfs_h(int h, int prev, const vector<int>& masks) {
    if (h == 0)
        return 1;
    if (dp[h][prev] == 0)
        for (int mask : masks)
            if ((mask & prev) == 0)
                dp[h][prev] = (dp[h][prev] + dfs_h(h - 1, mask, masks)) % 1000000007;
    return dp[h][prev];
}
vector<int> dfs_w(int w, int width, vector<int>& bricks, int mask, vector<int> &masks) {
    if (w == width) 
        masks.push_back(mask);
    else {
        if (w)
            mask += (1 << (w - 1));
        for (int b : bricks)
            if (w + b <= width)
                dfs_w(w + b, width, bricks, mask, masks);
    }
    return masks;
}
int buildWall(int height, int width, vector<int>& bricks) {
    return dfs_h(height, 0, dfs_w(0, width, bricks, 0, vector<int>() = {}));
}
```
#### Optimized Top-Down DP
Instead of always checking all masks, we could pre-build a transition list. This improves the runtime from 150 to 60 ms.
**C++**
```cpp
int dp[101][1024] = {};
int dfs_h(int h, int i, vector<vector<int>> &ids) {
    if (h == 0)
        return 1;
    if (dp[h][i] == 0)
        for (int j : ids[i])
            dp[h][i] = (dp[h][i] + dfs_h(h - 1, j, ids)) % 1000000007;
    return dp[h][i];
}
vector<int> dfs_w(int w, int width, vector<int>& bricks, int mask, vector<int> &masks) {
    if (w == width) 
        masks.push_back(mask);
    else {
        if (w)
            mask += (1 << (w - 1));
        for (int b : bricks)
            if (w + b <= width)
                dfs_w(w + b, width, bricks, mask, masks);
    }
    return masks;
}
int buildWall(int height, int width, vector<int>& bricks) {
    vector<int> masks = dfs_w(0, width, bricks, 0, vector<int>() = {});
    vector<vector<int>> ids(masks.size() + 1);
    for (int i = 0; i < masks.size(); ++i)
        for (int j = 0; j < masks.size(); ++j) {
            if (i == 0)
                ids[0].push_back(j + 1);
            if ((masks[i] & masks[j]) == 0)
                ids[i + 1].push_back(j + 1);
        }
    return dfs_h(height, 0, ids);
}
```