# Python Manhat Dist & BFS Solutions

**Author:** Tannerr12
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/solutions/4190685/](https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/solutions/4190685/)

---

Math
```py
class Solution:
    def minDayskVariants(self, points: List[List[int]], k: int) -> int:
        
        res = float('inf')
        for i in range(1, 101):
            
            for j in range(1, 101):
                
                heap = []
                
                for x,y in points:
                    dist = abs(i-x) + abs(j-y)
                    heappush(heap, dist)
                
                cur = 0
                tk = k
                
                while heap and tk:
                    cur = max(cur,heappop(heap))
                    tk -=1
                
                res = min(res, cur)
                
        
        return res
                

   ```
   BFS
   ```
        
        pMp = defaultdict(set)
        
        seen = set()
        q = deque()
        for i, (x,y) in enumerate(points):
            q.append((i,x,y))
            seen.add((i,x,y))
        level = 0
        
        
        directions = [[1,0],[-1,0],[0,-1],[0,1]]
        
        while q:
            
            for i in range(len(q)):
                
                pos, x, y = q.popleft()
                
                pMp[(x,y)].add(i)
                
                if len(pMp[(x,y)]) == k:
                    return level
                
                
                for l,r in directions:
                    
                    newx,newy = x + l, y + r
                    
                    if newx < 1 or newx > 100 or newy < 1 or newy > 100 or (pos, newx,newy) in seen:
                        continue
                    
                    seen.add((pos,newx,newy))
                    q.append((pos, newx, newy))
            
            
            level += 1
        
        
