# Python easy union-find solution

**Author:** byuns9334
**Votes:** 13
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/1691448/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/1691448/)

---

```
class UnionFind:
    def __init__(self, size):
        self.root = [i for i in range(size)]
        # Use a rank array to record the height of each vertex, i.e., the "rank" of each vertex.
        # The initial "rank" of each vertex is 1, because each of them is
        # a standalone vertex with no connection to other vertices.
        self.rank = [1] * size

    # The find function here is the same as that in the disjoint set with path compression.
    def find(self, x):
        if x == self.root[x]:
            return x
        self.root[x] = self.find(self.root[x])
        return self.root[x]

    # The union function with union by rank
    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)
        if rootX != rootY:
            if self.rank[rootX] > self.rank[rootY]:
                self.root[rootY] = rootX
            elif self.rank[rootX] < self.rank[rootY]:
                self.root[rootX] = rootY
            else:
                self.root[rootY] = rootX
                self.rank[rootX] += 1

    def connected(self, x, y):
        return self.find(x) == self.find(y)


class Solution:
    def equationsPossible(self, equations: List[str]) -> bool:
        uf = UnionFind(26)
        equations_same = [x for x in equations if x[1] == '=']
        equations_notsame = [x for x in equations if x[1] == '!']
        
        for eq in equations_same:
            
            xi, yi = ord(eq[0])-ord('a'), ord(eq[-1])-ord('a')
            uf.union(xi, yi)
                
        for eq in equations_notsame:
           
            xi, yi = ord(eq[0])-ord('a'), ord(eq[-1])-ord('a')
            if uf.connected(xi, yi):
                return False
            
        return True
                
                
```