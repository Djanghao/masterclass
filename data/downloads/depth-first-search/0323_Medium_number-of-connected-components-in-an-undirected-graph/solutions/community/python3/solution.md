# Simple DFS and BFS Python solutions using a dictionary

**Author:** Peakyblinder14
**Votes:** 20
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/400707/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/400707/)

---

**Idea:** 
Create an Adjacency list from the given pairs of nodes, using a dictionary. Idea is to sync up all the indices that are connected to each other by performing DFS/BFS and then increment the count. Similar to the number of islands problem where we sync up all the 1's and add it to the count.


**DFS:** 
```
from collections import defaultdict
class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        hashMap=defaultdict(list)
        for x,y in edges:
            hashMap[x].append(y)
            hashMap[y].append(x)
        visited=set()
        count=0
        for index in range(n):
            if index not in visited:
                self.dfsHelper(index, edges, visited, hashMap)
                count+=1
        return count
    
    def dfsHelper(self, index, edges, visited, hashMap):
        if index in visited:
            return
        visited.add(index)
        for neighbor in hashMap[index]:
            self.dfsHelper(neighbor, edges, visited, hashMap)
  ```
  
**BFS:**
```
from collections import defaultdict, deque
class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        hashMap=defaultdict(list)
        for x,y in edges:
            hashMap[x].append(y)
            hashMap[y].append(x)
        q = deque()
        visited=set()
        count=0
        for index in range(n):
            if index in visited:
                continue
            q.append(index)
            while q:
                curr = q.popleft()
                if curr in visited:
                    continue
                visited.add(curr)
                for neighbour in hashMap[curr]:
                    q.append(neighbour)
            count+=1
        return count 
```