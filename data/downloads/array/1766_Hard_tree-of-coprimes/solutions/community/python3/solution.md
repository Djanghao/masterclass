# [Python3] dfs

**Author:** ye15
**Votes:** 10
**Link:** [https://leetcode.com/problems/tree-of-coprimes/solutions/1074565/](https://leetcode.com/problems/tree-of-coprimes/solutions/1074565/)

---

**Algo**
This is a typical DFS problem. However, the amont of nodes can be huge `10^5` but the values only vary from `0` to `50`. Due to this reason, we can organize what have been seen in a value to location mapping to reduce the amount of nodes to check. 

**Implementation**
```
class Solution:
    def getCoprimes(self, nums: List[int], edges: List[List[int]]) -> List[int]:
        tree = {} # tree as adjacency list 
        for u, v in edges: 
            tree.setdefault(u, []).append(v)
            tree.setdefault(v, []).append(u)
        
        ans = [-1]*len(nums)
        path = {} # val -> list of position & depth 
        seen = {0}
        
        def fn(k, i): 
            """Populate ans via dfs."""
            ii = -1 
            for x in path:
                if gcd(nums[k], x) == 1: # coprime 
                    if path[x] and path[x][-1][1] > ii: 
                        ans[k] = path[x][-1][0]
                        ii = path[x][-1][1]
                        
            path.setdefault(nums[k], []).append((k, i))
            for kk in tree.get(k, []): 
                if kk not in seen: 
                    seen.add(kk)
                    fn(kk, i+1)
            path[nums[k]].pop()
            
            
        fn(0, 0)
        return ans 
```

**Analysis**
Time complexity `O(N)` (`O(50N)` to be more specific)
Space complexity `O(N)`