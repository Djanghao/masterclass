# Python Minimum Spanning Tree + BFS

**Author:** cchoate09
**Votes:** 2
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/2432335/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/2432335/)

---

```
class DistanceLimitedPathsExist:

    def __init__(self, n: int, edgeList: List[List[int]]):
        self.root = list(range(0, n))
        self.rank = [1]*n
        
        def find(x):
            if self.root[x] == x:
                return x
            else:
                self.root[x] = find(self.root[x])
                return self.root[x]
            
        def union(x, y):
            rootX = find(x)
            rootY = find(y)
            if rootX != rootY:
                if self.rank[rootX] > self.rank[rootY]:
                    self.root[rootY] = rootX
                elif self.rank[rootY] > self.rank[rootX]:
                    self.root[rootX] = rootY
                else:
                    self.root[rootY] = rootX
                    self.rank[rootX] += 1
        
        def connected(x, y):
            return find(x) == find(y)
        
        edgeList.sort(key = lambda x: x[2], reverse=True)
        
        self.d = collections.defaultdict(list)
        
        while edgeList:
            x,y,cost = edgeList.pop()
            
            if not connected(x,y):
                self.d[x].append([y, cost])
                self.d[y].append([x, cost])
                union(x,y)

    def query(self, p: int, q: int, limit: int) -> bool:
        def find(x):
            if self.root[x] == x:
                return x
            else:
                self.root[x] = find(self.root[x])
                return self.root[x]
        
        def connected(x, y):
            return find(x) == find(y)
        
        if not connected(p,q):
            return False
        
        hashset = set()
        
        que = deque()
        que.append(p)
        hashset.add(p)
        
        while que:
            x = que.popleft()
            if x == q:
                return True
            else:
                for j in self.d[x]:
                    if j[0] not in hashset and j[1] < limit:
                        hashset.add(j[0])
                        que.append(j[0])
        
        return False

```

Set up a minimum spanning tree and write the relevant edges to a dictionary, then use BFS to see if you can find a path without violating the limit.