# O(N log N) Solution with Sorting in Erlang, Only 4 Lines

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/4898184/](https://leetcode.com/problems/non-overlapping-intervals/solutions/4898184/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Sort the intervals by their right ends, and scan the intervals. For an interval whose left end overlaps with previous chosen interval, skip it. This problem can be elegantly solved by using Erlang. 

# Complexity
- Time complexity: $O(N \\log N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: Only $O(1)$ additional space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec erase_overlap_intervals(Intervals :: [[integer()]]) -> integer().
erase_overlap_intervals(Intervals) -> 
    solve(lists:sort(fun([_,A], [_,B]) -> A =< B end, Intervals), -10000000, 0).
solve([], _, Ans) -> Ans;
solve([[L,R]|T], Extend, Ans) when L < Extend -> solve(T, Extend, Ans + 1);
solve([[L,R]|T], Extend, Ans) -> solve(T, R, Ans).
```