# [Python3] BFS + SortedList, keep track of remaining nodes

**Author:** awice
**Votes:** 39
**Link:** [https://leetcode.com/problems/minimum-reverse-operations/solutions/3368819/](https://leetcode.com/problems/minimum-reverse-operations/solutions/3368819/)

---

Evidently, we should start our investigation with the question: if there is a `1` at position `node`, what neighboring nodes `nei` could it reach in one move?

Let `i_left = max(0, node - K + 1)`, `i_right = min(node + K - 1, n - 1) - (K - 1)` be the starting positions of the subarray to be reversed.  Then, after reversing subarray `[i, i+K-1]` (for `i` in `[i_left, i_right]`), `node` goes to `nei = i + (i+K-1) - node`.  In the end, `nei` is chosen from some interval `[lo, lo+2, ..., hi]`.

Armed with this information, let's do a standard BFS.  However, this is too slow as we are considering the same neighbors a lot.

To remedy this, let's keep track of which nodes haven't been reached by our BFS yet.  We split these by parity into `remaining[0]` and `remaining[1]`.  When we have some interval `[lo, lo+2, ..., hi]` of potential neigbhors, we can query the intersection (of this interval with unvisited nodes) quickly as we only consider each unvisited neighbor once.

**Complexity**: Time $$O(N^2)$$, Space: $$O(N)$$.  (`SortedList` dominates the complexity, and for general purposes it can be thought of as contributing $$\\approx O(N \\log N)$$, but the implementation is actually $$O(N^{\\frac{4}{3}})$$, assuming the load constant is chosen as $$m = N^{\\frac{1}{3}}$$.)

# Code
```
from sortedcontainers import SortedList

class Solution:
    def minReverseOperations(self, n, p, banned_vals, K):
        remaining = [SortedList(), SortedList()]
        banned = set(banned_vals)
        for u in range(n):
            if u != p and u not in banned:
                remaining[u & 1].add(u)

        queue = [p]
        dist = [-1] * n
        dist[p] = 0
        for node in queue:
            lo = max(node - K + 1, 0)
            lo = 2 * lo + K - 1 - node
            hi = min(node + K - 1, n - 1) - (K - 1)
            hi = 2 * hi + K - 1 - node

            for nei in list(remaining[lo % 2].irange(lo, hi)):
                queue.append(nei)
                dist[nei] = dist[node] + 1
                remaining[lo % 2].remove(nei)
        
        return dist
```