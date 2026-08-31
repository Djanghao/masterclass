# Simple Python

**Author:** ac1
**Votes:** 19
**Link:** [https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/303891/](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/303891/)

---

The rows or transpose of the rows where there values are same will lead to the result.
```
    def maxEqualRowsAfterFlips(self, matrix):
        cache = collections.defaultdict(int)
        for row in matrix:
            vals = []
            trans = []
            for c in row:
                vals.append(c)
                trans.append(1 - c)
            cache[str(vals)] += 1
            cache[str(trans)] += 1
        return max(cache.values())
```