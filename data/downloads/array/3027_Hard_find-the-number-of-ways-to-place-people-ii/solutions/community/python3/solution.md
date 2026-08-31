# Sort and Track Max Y

**Author:** votrubac
**Votes:** 31
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4671722/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4671722/)

---

With `1000` points, a quadratic solution would do. We just need an efficient way to check for points in between.

> This problem does not feeel like Hard 7; more like Medium 5 or, at most, Hard 6.

First, we sort our points by `x`.

For each point `x1, y1`, we consider points `x2, y2` on the rigth with `y1 >= y2`.

> Note that `x1 <= x2` because points are sorted.
 
We track the largest `y` so far, and if `y < y2`,  Chisato and Takina are alone.

**Python 3**
```python
class Solution:
    def numberOfPairs(self, points: List[List[int]]) -> int:
        res = 0
        points.sort(key=lambda p: (p[0], -p[1]))
        for i, (x1, y1) in enumerate(points):
            y = -inf
            for (x2, y2) in points[i + 1:]:
                if y1 >= y2 > y:
                    res += 1
                    y = y2
        return res     
```

**C++**
```cpp
int numberOfPairs(vector<vector<int>>& p) {
    int res = 0, n = p.size();
    sort(begin(p), end(p), [](const auto &p1, const auto &p2){
        return p1[0] == p2[0] ? p1[1] > p2[1] : p1[0] < p2[0];
    });
    for (int i = 0; i < n; ++i)
        for (int j = i + 1, y = INT_MIN; j < n; ++j)
            if (p[i][1] >= p[j][1] && y < p[j][1]) {
                ++res;
                y = p[j][1];
            }
    return res;
}
```