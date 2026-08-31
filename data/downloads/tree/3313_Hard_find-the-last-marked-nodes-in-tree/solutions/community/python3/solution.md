# Python (Simple 2DFS + 2BFS)

**Author:** rnotappl
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-last-marked-nodes-in-tree/solutions/5892677/](https://leetcode.com/problems/find-the-last-marked-nodes-in-tree/solutions/5892677/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def lastMarkedNodes(self, edges):
        graph, n, result = defaultdict(list), len(edges) + 1, []

        for i,j in edges:
            graph[i].append(j)
            graph[j].append(i)

        def function(node):
            stack, visited, val, d = [(node,0)], {node}, -1, 0

            while stack:
                nd,dist = stack.pop()

                if dist > d:
                    d = dist 
                    val = nd 

                for neighbor in graph[nd]:
                    if neighbor not in visited:
                        stack.append((neighbor,dist+1))
                        visited.add(neighbor)

            return val 

        u = function(0)
        v = function(u)

        def kunction(node):
            stack, visited, dist = [node], {node}, [0]*n 

            while stack:
                nd = stack.pop(0)

                for neighbor in graph[nd]:
                    if neighbor not in visited:
                        stack.append(neighbor)
                        dist[neighbor] = dist[nd] + 1 
                        visited.add(neighbor)

            return dist 

        ans1 = kunction(u)
        ans2 = kunction(v)

        for i in range(n):
            if ans1[i] >= ans2[i]:
                result.append(u)
            else:
                result.append(v)

        return result 
```