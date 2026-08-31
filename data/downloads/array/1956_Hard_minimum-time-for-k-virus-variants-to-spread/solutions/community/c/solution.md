# Binary Search

**Author:** votrubac
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/solutions/2045646/](https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/solutions/2045646/)

---

This is not going to work for a large grid, but it's simple and sufficient for this problem constraints.

**C++**
```cpp
int minDayskVariants(vector<vector<int>>& ps, int k) {
    int l = 0, r = 100;
    while (l < r) {
        int m = (l + r) / 2, cnt = 0;
        for (int i = 0; cnt < k && i < 101; ++i)
            for (int j = 0; cnt < k && j < 101; ++j)
                cnt = max(cnt, accumulate(begin(ps), end(ps), 0, [&](int s, const auto &p) { 
                    return s + (m >= abs(i - p[0]) + abs(j - p[1]));
                }));
        if (cnt < k)
            l = m + 1;
        else
            r = m;
    }
    return l;
}
```