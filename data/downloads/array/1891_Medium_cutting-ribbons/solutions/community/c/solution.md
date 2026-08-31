# Binary Search

**Author:** votrubac
**Votes:** 29
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/1262166/](https://leetcode.com/problems/cutting-ribbons/solutions/1262166/)

---

The maximum possible length of `k` ribbon pieces is `sum(ribbons) / k`. If it's zero, it's zero...

Otherwise, it is somewhere between `1` and that maximum length. We use a binary search to find a lenght that we can `obtain` at least `k` times.

**C++**
```cpp
int maxLength(vector<int>& ribs, int k) {
    int l = 0, r = accumulate(begin(ribs), end(ribs), 0l) / k;
    while (l < r) {
        int m = (l + r + 1) / 2, obtain = 0;
        for (int i = 0; i < ribs.size() && obtain < k; ++i)
            obtain += ribs[i] / m;
        if (obtain < k)
            r = m - 1;
        else
            l = m;
    }
    return l;
}
```