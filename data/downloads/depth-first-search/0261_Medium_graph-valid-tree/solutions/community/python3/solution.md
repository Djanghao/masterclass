# 3 Solutions | DFS | BFS | Union find | Easy to understand | Faster | Python Solution

**Author:** Mrmagician
**Votes:** 16
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/935840/](https://leetcode.com/problems/graph-valid-tree/solutions/935840/)

---

```
class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
#         Making a graph here (following the DRY principle for both DFS and BFS cases)
        graph = {i: [] for i in range(n)}
        for edge1, edge2 in edges: 
            graph[edge1].append(edge2)
            graph[edge2].append(edge1)
        return self.usingGraphBFS(n, edges, graph)
    
    def usingGraphBFS(self, n, edges, graph):
        queue = deque([0])
        seen = set()
        parent = {}
        while len(queue):
            first = queue.popleft()
            seen.add(first)
            for child in graph.get(first):
                if parent.get(first) == child: continue
                if child in seen: return False
                parent[child] = first
                queue.append(child)
        return len(seen) == n
    
    def usingGraphDFS(self, n, edges, graph):
        nodes = set()
        parent = {}
        stack = [0]
        while len(stack):
            node = stack.pop()
            nodes.add(node)
            for child in graph[node]:
                if parent.get(node) == child: continue
                if child in parent: return False
                stack.append(child)
                parent[child] = node
        
        # print(nodes)  
        return len(nodes) == n
        
    def usingUnionFind(self, n, edges):
        nodes = [i for i in range(n)]
        for edge1, edge2 in edges:
            res = self.union(nodes, edge1, edge2)
            if not res: return False
        
        root = self.find(nodes, 0)
        for i in range(1, n):
            if self.find(nodes, i) != root: return False
        
        return True
    
    # Helper function        
    def checkCycle(self, graph, node, visited):
        if node in visited: return False
        visited.add(node)
        for child in graph[node]:
            res = self.checkCycle(graph, child, visited)
            if not res: return False
        return visited
     
    # Helper function
    def find(self, nodes, edge):
        root = edge
        while root != nodes[root]: root = nodes[root]
        while edge != nodes[edge]:
            temp = nodes[edge]
            nodes[edge] = root
            edge = temp
        return root
    
    # Helper function
    def union(self, nodes, edge1, edge2):
        root1 = self.find(nodes, edge1)
        root2 = self.find(nodes, edge2)
        if root1 == root2: return False
        nodes[root1] = nodes[root2]
        return True
        
    
    
```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38