# [Java/Python 3] Count non-overlapping components and double accordingly.

**Author:** rock
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3256146/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3256146/)

---

Sort the `ranges` to find the number of non-overlapping components, and for each component, we have 2 options: put it into group `1` or `2`.

Therefore, the answer is `2 ^ (# of componenets)`.

```java
    public int countWays(int[][] ranges) {
        Arrays.sort(ranges, Comparator.comparingInt(r -> r[0]));
        int cnt = 1, hi = -1;
        for (int[] r : ranges) {
            if (hi < r[0]) {
                cnt <<= 1;
                cnt %= 1_000_000_007;
            }
            hi = Math.max(hi, r[1]);
        }
        return cnt;
    }
```

```python
    def countWays(self, ranges: List[List[int]]) -> int:
        cnt, hi = 1, -1
        for a, b in sorted(ranges):
            if hi < a:
                cnt <<= 1
                cnt %= 10 ** 9 + 7
            hi = max(hi, b)
        return cnt
```
**Analysis:**

Time: `O(nlogn)`, space: `O(n)` - including sorting space.