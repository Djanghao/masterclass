# Ruby 1-line solution RT Beats 96%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/5510386/](https://leetcode.com/problems/non-overlapping-intervals/solutions/5510386/)

---

# Code
```
# @param {Integer[][]} intervals
# @return {Integer}
def erase_overlap_intervals(intervals, n = intervals.sort_by!(&:last)[0][0]) = 
  intervals.size - intervals.inject(0) { |cnt, (n1, n2)| n <= n1 ? (n, cnt = n2, cnt + 1).last : cnt }
```