# Python3 UnionFind/DFS/BFS solution

**Author:** jinjiren
**Votes:** 74
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/319459/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/319459/)

---

## Thought process
- union find, find disjoint sets, then check how many sets there are
	- path compression
	- union by rank
	- be aware that after a union operation, the `parent` of a node might not be updated immediately
		- to solve this problem and avoid potential bugs, we should not rely on the raw `parent` representation, instead, we should call `find(node)` to actually obtain the correct `parent`/set label

- dfs, bfs, if a node is not already visited, try bfs/dfs starting from this node, add the count of connected components by 1

## Simple UnionFind
```py
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        parent = list(range(n))
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        def union(x, y):
            rx, ry = find(x), find(y)
            if rx != ry:
                parent[rx] = ry 
        
        for x, y in edges:
            union(x, y)
        return len({find(i) for i in range(n)})
```


## UnionFind with Union by Rank
```py
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        parent = list(range(n))
        rank = [1] * n
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        def union(x, y):
            rx, ry = find(x), find(y)
            if rx == ry:
                return
            if rank[rx] > rank[ry]:
                parent[ry] = rx
            elif rank[rx] < rank[ry]:
                parent[rx] = ry
            else:
                parent[rx] = ry
                rank[ry] += 1
        
        for x, y in edges:
            union(x, y)
        return len({find(i) for i in range(n)})
```

## DFS
```py
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        graph = collections.defaultdict(list)
        for x, y in edges:
            graph[x].append(y)
            graph[y].append(x)
        
        def dfs(node, seen):
            seen.add(node)
            for neighbor in graph[node]:
                if neighbor not in seen:
                    dfs(neighbor, seen)
        count = 0
        seen = set()
        for node in range(n):
            if node not in seen:
                dfs(node, seen)
                count += 1
        return count
```


## BFS
```py
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        graph = collections.defaultdict(list)
        for x, y in edges:
            graph[x].append(y)
            graph[y].append(x)
        
        def bfs(node, seen):
            queue = collections.deque([node])
            while queue:
                node = queue.popleft()
                for neighbor in graph[node]:
                    if neighbor not in seen:
                        seen.add(neighbor)
                        queue.append(neighbor)
        count = 0
        seen = set()
        for node in range(n):
            if node not in seen:
                seen.add(node)
                bfs(node, seen)
                count += 1
        return count
```