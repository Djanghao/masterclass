# Python || Faster than 100% || Simple DFS || Easy Explanation

**Author:** Laxman_Singh_Saini
**Votes:** 18
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/2494179/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/2494179/)

---

**similar approach like longest path in Tree**
#### **If you like the Solution,
#### please  Upvote  :) **
```
class Solution:
    def longestPath(self, par: List[int], s: str) -> int:
        dit = {}
        # store tree in dictionary
        for i in range(len(par)):
            if par[i] in dit:
                dit[par[i]].append(i)
            else:
                dit[par[i]] = [i]
                
        ans = 1        
        def dfs(n):
            nonlocal ans
            if n not in dit:
                return 1
            
            largest=0 # largest path lenght among all children
            second_largest=0 # second largest path lenght among all children
            for u in dit[n]:
                curr = dfs(u)
                if s[u]!=s[n]: # pick child path if child and parent both have different value
                    if curr>largest:
                        second_largest = largest
                        largest = curr
                    elif curr>second_largest:
                        second_largest = curr
                        
            ans = max(ans,largest+second_largest+1) # largest path including parent with at most two children 
            
            return largest+1  # return largest path end at parent
        
        dfs(0)
        return ans
        ```