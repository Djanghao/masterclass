# [Python] Binary Search + Interval Stabbing

**Author:** awice
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6053410/](https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6053410/)

---

Binary search for the answer.

Let's say we are trying to decide whether `bound` is an answer.  Every wildcard `?` next to a positive value `a` induces an interval `[a-bound, a+bound]`.  Wildcards like `a?b` induce the interval `[a-bound,a+bound] INTERSECT [b-bound,b+bound]`.

At the end, we have some intervals and we want to know whether all of them can be stabbed by two points.  The choice for these points will be greedy from the left and right as these extreme intervals must have a point on them chosen.

If we have chosen points `lo, hi`, then additionally they must have `abs(lo - hi) <= bound`, or the choice is valid without having to switch between `lo` and `hi`.

# Code
```python3 []
class Solution:
    def minDifference(self, A: List[int]) -> int:
        groups = [list(grp) for k, grp in groupby(A, key=lambda x: x>0)]
        singles = []  # a? or a??
        doubles = []  # a?b or a??b
        base = 0  # the max diff of two positive elements

        for i, grp in enumerate(groups):
            if grp[0] != -1:
                for j in range(len(grp) - 1):
                    base = max(base, abs(grp[j] - grp[j+1]))
                continue

            neis = []
            if i - 1 >= 0:
                neis.append(groups[i-1][-1])
            if i + 1 < len(groups):
                neis.append(groups[i+1][0])
            neis.sort()

            if len(neis) == 1:
                singles.append([*neis, len(grp) > 1])
            if len(neis) == 2:
                doubles.append([*neis, len(grp) > 1])

        if not singles and not doubles:
            return base

        def possible(bound):
            intervals = []
            for a, len2 in singles:
                intervals.append([a-bound, a+bound])
            for a, b, len2 in doubles:
                if len2:
                    intervals.append([a-bound, a+bound])
                    intervals.append([b-bound, b+bound])
                else:
                    lo = b - bound
                    hi = a + bound
                    if lo > hi: return 0
                    intervals.append([lo, hi])

            # we have a bunch of intervals, and we want to know if we can stab twice
            # to hit all intervals
            lo = min(e for s,e in intervals)
            hi = max(s for s,e in intervals)
    
            if lo + bound < hi:
                if not all(
                    any(abs(a-p) <= bound and abs(b-p) <= bound for p in [lo, hi]) 
                    for a,b,l in doubles
                ):
                    return 0

            return all(s <= lo <= e or s <= hi <= e for s,e in intervals)
            
        return bisect_left(range(10**9), 1, base, max(A), key=possible)
```