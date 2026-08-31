# Ruby simple 1-line solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/5517633/](https://leetcode.com/problems/find-right-interval/solutions/5517633/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} intervals
# @return {Integer[]}
def find_right_interval(intervals, arr = intervals.map(&:first).zip((0...intervals.size).to_a).sort_by(&:first)) =
  intervals.each_with_object([]) { |(_, e), a| (j = arr.bsearch_index { |x| x[0] >= e }) ? a << arr[j][1] : a << -1 } 
```