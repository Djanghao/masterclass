# One-liner

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1599378/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1599378/)

---

Did not get the point of this question. The robot cannot avoid going through rows and cols between it and home.

#### One-liner
**C++**
```cpp
int minCost(vector<int>& s, vector<int>& h, vector<int>& r, vector<int>& c) {
    return accumulate(begin(r) + min(s[0], h[0]), begin(r) + max(s[0], h[0]) + 1, -r[s[0]]) +
        accumulate(begin(c) + min(s[1], h[1]), begin(c) + max(s[1], h[1]) + 1, -c[s[1]]);
}
```

#### Verbose
**C++**
```cpp
int minCost(vector<int>& s, vector<int>& h, vector<int>& rowCosts, vector<int>& colCosts) {
    int res = 0, dr = s[0] < h[0] ? 1 : -1, dc = s[1] < h[1] ? 1 : -1;
    for (int r = s[0]; r != h[0]; r += dr)
        res += rowCosts[r + dr];
    for (int c = s[1]; c != h[1]; c += dc)
        res += colCosts[c + dc];
    return res;
}   
```