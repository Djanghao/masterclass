# O(n log n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/6031875/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/6031875/)

---

# Complexity
- Time complexity:$$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` rust []
impl Solution {
    pub fn count_ways(mut ranges: Vec<Vec<i32>>) -> i32 {
        ranges.sort_unstable();
        const m: u64 = 1_000_000_007;
        let (mut res, mut last_known_end) = (1_u64, -1);
        for range in ranges {
            if range[0] > last_known_end {
                //increase the number of buckets
                res = (res * 2) % m;
                last_known_end = range[1];
            } else { last_known_end = last_known_end.max(range[1]); }
        }
        res as _
    }
}
```
``` java []
class Solution {
    public int countWays(final int[][] ranges) {
        Arrays.sort(ranges, Comparator.comparingInt(a -> a[0]));
        final int MOD = 1_000_000_007;
        long res = 1;
        int lastKnownEnd = -1;

        for (final int[] range : ranges) 
            if (range[0] > lastKnownEnd) {
                res = (res * 2) % MOD;
                lastKnownEnd = range[1];
            } else lastKnownEnd = Math.max(lastKnownEnd, range[1]);
        return (int) res;
    }
}
```
``` python []
class Solution:
    def countWays(self, ranges: List[List[int]]) -> int:
        ranges.sort()
        MOD, res, last_known_end = 1_000_000_007, 1, -1
        for start, end in ranges:
            if start > last_known_end: 
                last_known_end = end
                res = (res * 2) % MOD
            else: last_known_end = max(last_known_end, end)
        return res
```
``` scala []
object Solution {
    def countWays(ranges: Array[Array[Int]]): Int = 
        ranges
        .sortBy(_(0))
        .foldLeft((1L, -1)) { 
            case ((res, lastEnd), Array(start, end)) =>
            if start > lastEnd then ((res * 2) % 1_000_000_007, end)
            else (res, lastEnd.max(end))
        }
        ._1
        .toInt
}
```
```golang []
func countWays(ranges [][]int) int {
    sort.Slice(ranges, func (i, j int) bool {
        return ranges[i][0] < ranges[j][0]
    })

    const m uint64 = 1_000_000_007
    res, lastKnownEnd := uint64(1), -1
    
    for _, r := range ranges{
        if r[0] > lastKnownEnd {
            res = (res * 2) % m
            lastKnownEnd = r[1]
        } else {
            if r[1] > lastKnownEnd {
                lastKnownEnd = r[1]
            }
        }
    }

    return int(res)
}
```