# Simple logical answer - JS

**Author:** _nyctophiliac_
**Votes:** 2
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262539/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262539/)

---

We can always reach from pointA to pointB if given infinite time, since we can move in all directions without constraints.
We can always reach from pointA to pointB if `t > min time to reach from A to B`

Simple logic:
Min time = Max of xdiff and ydiff.

Handling the conditions when start and end is the same should cover corner cases.

```
function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
    if (sx === fx && sy === fy && t === 1) return false 

    const xdiff = Math.abs(fx-sx)
    const ydiff = Math.abs(fy-sy)
    return Math.max(xdiff, ydiff) <= t
};
```