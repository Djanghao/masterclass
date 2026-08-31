# Python 3 union find easy to understand

**Author:** zhaolzhang
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/540276/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/540276/)

---


```
class Solution:``
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
        parent = list(range(n))
        self.count = n
        self.redundant = 0
        def find(x):
            if x != parent[x]:
                parent[x] = find(parent[x])
            return parent[x]
        def union(x,y):
            rootx = find(x)
            rooty = find(y)
            if rootx != rooty:
                parent[rootx] = rooty
                self.count -= 1
            else:
                self.redundant +=1
        
        for x, y in connections:
            union(x, y)
        
        if self.redundant >= self.count - 1:
            return self.count - 1
        else:
            return -1
			
```