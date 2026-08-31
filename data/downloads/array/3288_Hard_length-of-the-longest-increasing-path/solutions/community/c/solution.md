# Double LIS

**Author:** votrubac
**Votes:** 20
**Link:** [https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5787529/](https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5787529/)

---

The idea is simple: we sort points by `x`, and run the LIS algorithm for `y`.

> Note that we run LIS separately for points on the left and lower of point `k`, and for points on the right and upper.

The tricky part is that we need to sort by `x` ascending, and by `y` - descending.

Say we have points [1, 1] and [1, 2]. LIS(2, 1) will correctly return 1 point, but LIS(1, 2) will return 2.

Why can't we keep the smallest of `y` for the same `x`?

If we do that, for points [1,1], [1,2], [2,1] and [2,2], we will keep (1, 1) `y` coordinates, and LIS(1, 1) will return 1.

However, LIS(2, 1, 2, 1) correctly returns 2.

**C++**
```cpp
int maxPathLength(vector<vector<int>>& coords, int k) {
    int x = coords[k][0], y = coords[k][1];
    sort(begin(coords), end(coords), [](const auto &a, const auto &b){
        return a[0] == b[0] ? a[1] > b[1] : a[0] < b[0]; });
    vector<int> before, after;
    for (const auto &c : coords)
        if (c[0] < x && c[1] < y)
            insertLIS(before, c[1]);
        else if (c[0] > x && c[1] > y) 
            insertLIS(after, c[1]);
    return 1 + before.size() + after.size();
}
void insertLIS(vector<int> &ms, int y) {
    if (auto it = lower_bound(begin(ms), end(ms), y); it == end(ms))
        ms.push_back(y);
    else
        *it = y;      
}
```