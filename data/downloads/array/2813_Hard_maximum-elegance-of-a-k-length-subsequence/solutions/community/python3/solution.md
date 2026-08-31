# [Python3] Greedy

**Author:** awice
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/3872486/](https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/3872486/)

---

**Intuition**

Say an item is *golden* if it has the highest profit in its category.

Suppose we use $C$ categories in our selection.  It consists of the most profitable $C$ golden items, and the rest of the items are chosen to be the ones with the highest profit.

**Algorithm**

Sort `items` decreasing by profit.  When you encounter an item with a new category, it must be golden.  Otherwise it is a duplicate.

We're keeping track of `cates`, the set of categories with a golden item, `dupes`, the list of profit of duplicate items, and `cur`, the current total profit.


# Code
```
class Solution:
    def findMaximumElegance(self, items, K):
        items.sort(reverse=True)
        
        dupes = []
        cates = set()
        ans = cur = 0
        for p, c in items:
            cur += p
            if c not in cates:
                cates.add(c)
            else:
                dupes.append(p)

            while dupes and len(dupes) + len(cates) > K:
                cur -= dupes.pop()
            if len(dupes) + len(cates) <= K:
                ans = max(ans, cur + len(cates) ** 2)
        
        return ans
```