# Python faster than 99% no traversal

**Author:** bac2qh
**Votes:** 8
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/2595260/](https://leetcode.com/problems/tree-diameter/solutions/2595260/)

---

Learnt this from the minimum height tree problem. You basically only need to keep trimming the leaf (node with only 1 outgoing edge) until you get 1 or 2 nodes left. They are called centroid(s). Everytime you trim leaf you added length 2 to the longest length. 

Not sure about the proof I just memorized this one :) 

```python
class Solution:
    def treeDiameter(self, edges: List[List[int]]) -> int:
        adj = collections.defaultdict(set)
        for a, b in edges: 
            adj[a].add(b)
            adj[b].add(a)
            
        counter = 0 
        toRemove = []
        while len(adj) > 2: 
            for u in adj: 
                if len(adj[u]) == 1: 
                    toRemove.append(u)
            for u in toRemove: 
                v = adj[u].pop()
                adj.pop(u)
                adj[v].remove(u)
            toRemove = []
            counter += 2
            
        return counter + 1 if len(adj) == 2 else counter 
```
