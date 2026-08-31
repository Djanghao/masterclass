# [Python3] post-order dfs

**Author:** ye15
**Votes:** 14
**Link:** [https://leetcode.com/problems/create-components-with-same-value/solutions/2707304/](https://leetcode.com/problems/create-components-with-same-value/solutions/2707304/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/b09317beeb5fa2ae0b6d2537172ab52647a75cea) for solutions of biweekly 89. 

```
class Solution:
    def componentValue(self, nums: List[int], edges: List[List[int]]) -> int:
        tree = [[] for _ in nums]
        for u, v in edges: 
            tree[u].append(v)
            tree[v].append(u)
        
        def fn(u, p):
            """Post-order dfs."""
            ans = nums[u]
            for v in tree[u]: 
                if v != p: ans += fn(v, u)
            return 0 if ans == cand else ans
        
        total = sum(nums)
        for cand in range(1, total//2+1): 
            if total % cand == 0 and fn(0, -1) == 0: return total//cand-1
        return 0 
```