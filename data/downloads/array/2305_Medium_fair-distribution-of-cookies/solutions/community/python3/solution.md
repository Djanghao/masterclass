# Python|| Efficient backtracking fully explained

**Author:** stomachion
**Votes:** 18
**Link:** [https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3634043/](https://leetcode.com/problems/fair-distribution-of-cookies/solutions/3634043/)

---

# Intuition
Distribute one bag at the time. Take advantage that the order of the kids does not matter to avoid duplicate distributions. Give a bag to a kid only if his new total is less than our best solution so far. 

# Approach
DFS with the index of the next bag to be given as parameter. The array `split` contains the quantities for the kids that already got cookies. For each bag either give it to a new kid (if possible) or give it to a kid that already has cookies (as long as he will still have less than the min unfairness already found).

# Code
```
class Solution:
    def distributeCookies(self, cookies: List[int], k: int) -> int:
        def dfs(p):
            nonlocal best
            if p==len(cookies):
                best = min(best, max(split))
                return
            # give to a new kid
            if len(split)<k:
                split.append(cookies[p])
                dfs(p+1)
                split.pop()
            # give to a kid that already has cookies
            for i in range(len(split)):
                if split[i]+cookies[p] < best:
                    split[i] += cookies[p]
                    dfs(p+1)
                    split[i] -= cookies[p]

        split = []
        best = float("inf")
        dfs(0)
        return best
```

# Further optimization ideas

We can avoid giving the bag to kids that have the same amount of cookies using a `seen` set.

```
            # give to a kid that already has candy
            seen = set()
            for i in range(len(split)):
                if split[i]+cookies[p] < best and split[i] not in seen:
                    seen.add(split[i])
                    split[i] += cookies[p]
                    dfs(p+1)
                    split[i] -= cookies[p]
```

We can keep the `split` array sorted in descending order, to try to get to the better solutions faster and consequently avoid trying larger number of distributions that can't improve the current best solution.

These will make sense for higher values for `n` and `k` (the problem only allows values up to 8). 
