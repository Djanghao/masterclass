# Python 3 DFS + Memoization (lru_cache)

**Author:** idontknoooo
**Votes:** 5
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/783072/](https://leetcode.com/problems/shopping-offers/solutions/783072/)

---

```
class Solution:
    def shoppingOffers(self, price: List[int], special: List[List[int]], needs: List[int]) -> int:
        n = len(price)
        @lru_cache(maxsize=None)
        def dfs(needs):
            ans = sum([i*j for i, j in zip(price, needs)]) 
            cur = sys.maxsize
            for s in special:
                new_needs, ok = [], True
                for i in range(n):
                    need, give = needs[i], s[i]
                    if need < give:  # if over purchase, ignore this combination
                        ok = False
                        break
                    new_needs.append(need-give)    
                if ok: cur = min(cur, dfs(tuple(new_needs)) + s[-1])
            return min(ans, cur)
        return dfs(tuple(needs))
```