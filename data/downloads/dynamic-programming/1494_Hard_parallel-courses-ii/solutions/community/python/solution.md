# [Python 3] Brute Force Trying all combinations | bfs | 328ms | 67% faster

**Author:** chestnut890123
**Votes:** 6
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/959845/](https://leetcode.com/problems/parallel-courses-ii/solutions/959845/)

---

```
class Solution:
    def minNumberOfSemesters(self, n: int, dependencies: List[List[int]], k: int) -> int:
        f= defaultdict(list)
        for x, y in dependencies:
            f[y].append(x)

        cands = [x for x in range(1, n+1) if x not in f]
        stack = [(1, list(x)) for x in combinations(cands, min(k, len(cands)))]

		vis = set()
        while stack:
            semester, taken = heappop(stack)
            if len(taken) == n:
                return semester
            cands = [x for x in range(1, n+1) if x not in taken and all(y in taken for y in f[x])]
            for cand in combinations(cands, min(k, len(cands))):
                newtaken = sorted(taken+list(cand))
                if (tuple(newtaken), semester+1) not in vis:
                    vis.add((tuple(newtaken), semester+1))
                    heappush(stack, (semester+1, newtaken))