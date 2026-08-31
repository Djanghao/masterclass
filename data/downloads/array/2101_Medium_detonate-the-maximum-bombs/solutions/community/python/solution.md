# Why is this wrong? Python Union Find Solution passes 111/160

**Author:** rsaxena123
**Votes:** 8
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/2581558/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/2581558/)

---

```
class UnionF:
    def __init__(self, n):
        self.rank = [1 for _ in range(n)]
        self.par = [i for i in range(n)]
        self.n = n
        
    def find(self, n):
        # Path Compression + Finds root
        while n != self.par[n]:
            self.par[n] = self.par[self.par[n]]
            n = self.par[n]
        return n
    
    def union(self, n1, n2):
        p1, p2 = self.find(n1), self.find(n2)
        # If they aren't already unioned, union them
        if p1 != p2:
            if self.rank[p1] > self.rank[p2]:
                self.rank[p1] += 1
                self.par[p2] = p1
            else:
                self.rank[p2] += 1
                self.par[p1] = p2

class Solution:
    def maximumDetonation(self, bombs: List[List[int]]) -> int:
        n = len(bombs)
        union = UnionF(n)
        
        for i in range(n):
            for j in range(i):
                x1, y1, r1 = bombs[i][0], bombs[i][1], bombs[i][2]
                x2, y2, r2 = bombs[j][0], bombs[j][1], bombs[j][2]
                
                distance = sqrt((x2-x1)**2 + (y2-y1)**2)
                # Bombs would detonate eaach other
                if distance <= (r1 + r2):
                    union.union(i, j) 
        # Max rank is also the same as number of detonated bombs (connected componenets)
        return max(union.rank)
```
This is the test case it is failing:
[[54,95,4],[99,46,3],[29,21,3],[96,72,8],[49,43,3],[11,20,3],[2,57,1],[69,51,7],[97,1,10],[85,45,2],[38,47,1],[83,75,3],[65,59,3],[33,4,1],[32,10,2],[20,97,8],[35,37,3]]

I return 2 bombs detonate each other but the answer is 1 bombs detonates.

Specificially the bombs: [65, 59, 3] [69, 51, 7] are 8.94427190999916 distance apart yet the problem says they should not detonate each other. Why is this so?
