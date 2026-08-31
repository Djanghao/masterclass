# [Python] brute force

**Author:** pbelskiy
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4383327/](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4383327/)

---

```
class Solution:
    def numberOfSets(self, n: int, maxDistance: int, roads: List[List[int]]) -> int:

        def test_route(src, dest, s):
            q = [(0, src)]
            v = set()

            while q:
                weight, node = heappop(q)
                if node == dest and weight <= maxDistance:
                    return True

                for u, w in g[node]:
                    if (u, w) in v or u in s:
                        continue

                    heappush(q, (weight + w, u))
                    v.add((u, w))

            return False

        def test_set(s):
            for a in range(n):
                if a in s:
                    continue

                for b in range(n):
                    if b == a or b in s:
                        continue

                    # check if a can reach b for maxDistance
                    if not test_route(a, b, s):
                        return False

            return True

        g = defaultdict(list)
        for a, b, w in roads:
            g[a].append((b, w))
            g[b].append((a, w))

        t = 0
        a = list(range(n))
        for r in range(n + 1):
            for s in combinations(a, r):
                if test_set(set(s)):
                    t += 1

        return t
```