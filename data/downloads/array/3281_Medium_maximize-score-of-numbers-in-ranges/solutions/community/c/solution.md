# Binary Search

**Author:** votrubac
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5754443/](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5754443/)

---

If we sort our intervals, points that we pick will be non-decreasing.

With that, we can check in O(n) whether it is possible to pick all points while maintaining some minimal distance `m`.

Thus, we binary-search for the maximum `m`.

**C++**
```cpp
int maxPossibleScore(vector<int>& start, int d) {
    sort(begin(start), end(start));
    long long l = 0, r = start[1] + d - start[0];
    while (l < r) {
        long long m = (l + r + 1) / 2, point = start[0], i = 1;
        for (; i < start.size(); ++i) {
            point = max((long long)start[i], point + m);
            if (point > start[i] + d)
                break;
        }
        if (i == start.size())
            l = m;
        else
            r = m - 1;
    }
    return l;
}
```