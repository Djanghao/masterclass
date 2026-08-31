# DFS version maximum bipartite matching

**Author:** bbunny
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/5224476/](https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/5224476/)

---

# Approach
maximum bipartite matching

# Complexity
- Time complexity: O(V*E)

- Space complexity: O(V+E)

# Code
```
class Solution(object):
    def maximumInvitations(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        m, n = len(grid), len(grid[0])
        matchv = [-1 for _ in range(n)] 
        def bpm(boy, match, seen):
            for girl in range(n):
                if grid[boy][girl] and girl not in seen:
                    seen.add(girl)
                    if matchv[girl] == -1 or bpm(matchv[girl], matchv, seen):
                        matchv[girl] = boy
                        return True
            return False
        
        result = 0
        for i in range(m):
            seen = set()
            if bpm(i, matchv, seen):
                result += 1
        
        return result
        


```