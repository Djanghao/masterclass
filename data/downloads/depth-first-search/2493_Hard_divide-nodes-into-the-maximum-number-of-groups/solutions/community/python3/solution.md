# [Python3] BFS

**Author:** xil899
**Votes:** 18
**Link:** [https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/2875152/](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/2875152/)

---

**Implementation**
Step 1: Find all connected components of the graph, this can be achieved by using BFS.
Step 2: Find the maxinum number of groups in each connected component by using BFS and starting from each node of the component, or `-1` if not valid.
Step 3: If any of the output from Step 2 is `-1`, then return `-1`; otherwise, return the sum of the output from Step 2 as the final answer.

**Complexity**
Time Complexity: `O(n*(n+m))`, where `m` is the number of edges
Space Complexity: `O(n+m)`

**Solution**
```
class Solution:
    def magnificentSets(self, n: int, edges: List[List[int]]) -> int:
        graph = defaultdict(list)
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)
        components = []
        seen = set()
        for i in range(1, n + 1):
            if i in seen:
                continue
            queue = deque([i])
            visited = set([i])
            while queue:
                for _ in range(len(queue)):
                    node = queue.popleft()
                    for neighbor in graph[node]:
                        if neighbor in visited:
                            continue
                        visited.add(neighbor)
                        queue.append(neighbor)
            components.append(visited)
            seen = seen.union(visited)
        longest = [-1] * len(components)        
        for k in range(len(components)):
            for i in components[k]:
                longest[k] = max(longest[k], self.bfs(graph, i))
        if min(longest) < 0:
            return -1
        return sum(longest)
            
    def bfs(self, graph, i):
        queue = deque([i])
        seen = set([i])
        seenLevel = set()
        ans = 0
        while queue:
            ans += 1
            nextLevel = set()
            for _ in range(len(queue)):
                node = queue.popleft()
                for neighbor in graph[node]:
                    if neighbor in seenLevel:
                        return -1
                    if neighbor in seen:
                        continue
                    seen.add(neighbor)
                    nextLevel.add(neighbor)
                    queue.append(neighbor)
            seenLevel = nextLevel
        return ans
```