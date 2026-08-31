# O(n)

**Author:** votrubac
**Votes:** 37
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5143742/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5143742/)

---

A point belonts to a square with `max(abs(x), abs(y))` size.

For each tag, with track the minimum size `min_sz`. 

Our square must be smaller than the second minimum size (`second_min_sz`) amongst all tags.

So, we return the number of points with the minimum size less than `second_min_sz`.

**Python**
```python
class Solution:
    def maxPointsInsideSquare(self, points: List[List[int]], s: str) -> int:
        min_sz, second_min_sz = defaultdict(lambda: float('inf')), inf 
        for sz, tag in zip([max(abs(x), abs(y)) for x, y in points], s):
            if min_sz[tag] > sz:
                min_sz[tag], sz = sz, min_sz[tag]
            second_min_sz = min(second_min_sz, sz)
        return sum([sz < second_min_sz for sz in min_sz.values()])
```

**Kotlin**
```kotlin
fun maxPointsInsideSquare(points: Array<IntArray>, s: String): Int {
    val minSz = Array<Int>(26) { Int.MAX_VALUE }
    var minSz2 = Int.MAX_VALUE
    for ((i, p) in points.withIndex()) {
        var sz = max(abs(p[0]), abs(p[1]))
        val tag = s[i] - 'a'
        if (minSz[tag] > sz) minSz[tag] = sz.also { sz = minSz[tag] }
        minSz2 = minOf(minSz2, sz)        
    }    
    return minSz.count { it < minSz2 }
}
```
**C++**
```cpp
int maxPointsInsideSquare(vector<vector<int>>& ps, const string &s) {
    int second_min_sz = INT_MAX;
    vector<int> min_sz(26, INT_MAX);
    for (int i = 0; i < ps.size(); ++i) {
        int sz = max(abs(ps[i][0]), abs(ps[i][1]));
        if (min_sz[s[i] - 'a'] > sz)
            swap(min_sz[s[i] - 'a'], sz);
        second_min_sz = min(second_min_sz, sz);
    }
    return ranges::count_if(min_sz, [&](int sz){ return sz < second_min_sz; });
}
```