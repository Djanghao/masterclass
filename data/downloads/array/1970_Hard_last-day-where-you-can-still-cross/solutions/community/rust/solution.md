# [Python] Use UFS

**Author:** Ikerlb
**Votes:** 1
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/1414575/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/1414575/)

---

```
class DSU:
    def __init__(self, n):    
        self.p = [i for i in range(n)]                
         
    def _root(self, a):        
        if self.p[a] == a:    
            return a    
        self.p[a] = self._root(self.p[a]) 
        return self.p[a] 
        
    def union(self, a, b):
        ra = self._root(a)   
        rb = self._root(b)
        
        if ra == rb: 
            return False    
          
        self.p[ra] = rb
        return True
        
    def find(self, a):    
        return self._root(a) 
    
    def same(self, a, b): 
        ra = self._root(a) 
        rb = self._root(b) 
        return ra == rb

class Solution:
    def latestDayToCross(self, row: int, col: int, cells: List[List[int]]) -> int:
        
        def neighbors(r, c): 
            for dr, dc in [(1, 0), (0, 1), (-1, 0), (0, -1)]:    
                if 0 <= dr + r < row and 0 <= dc + c < col:
                    yield dr + r, dc + c        
        
        dsu = DSU(row * col + 2) # all (r, c) pairs and a top and bot encoding    
         
        s = set()
            
        top = row * col    
        bot = row * col + 1 
            
        # take the first row and connect it with top    
        # and take the last row and connect it with bot
        for c in range(col): 
            dsu.union(c, top)
            dsu.union(bot, (row - 1) * col + c)
            
            
        for i in range(row * col - 1, -1, -1):     
            if dsu.same(top, bot):
                return i + 1   
            r, c = cells[i]
            r -= 1 
            c -= 1 
            enc = r * col + c 
            s.add((r, c)) 
            for nr, nc in neighbors(r, c): 
                if (nr, nc) in s:
                    dsu.union(nr * col + nc, enc)
```