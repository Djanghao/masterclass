# Python Topological Sort Solution

**Author:** yj3657
**Votes:** 12
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/2241019/](https://leetcode.com/problems/loud-and-rich/solutions/2241019/)

---

Thanks for the visit. Below is the code for the python solution with topological sort. Basically, I formed graph where the direction of edge is from the node with richer to the one that is less rich. I then performed simple topological sort where I updated each item's corresponding quiettest and richer node. 



```
class Solution:
    def loudAndRich(self, richer: List[List[int]], quiet: List[int]) -> List[int]:
        length = len(quiet)
        arr = [i for i in range(length)]
        indegree = [0 for _ in range(length)]
        graph = collections.defaultdict(list)
        dq = collections.deque([])
        
        for a, b in richer:
            # Note that the graph is uni-directional
            graph[a].append(b)
            indegree[b] += 1

        for i in range(length):
            if not indegree[i]: 
                dq.append(i)
    
        while dq:
            node = dq.popleft()
            
            for vertex in graph[node]:
                indegree[vertex] -= 1
                if quiet[arr[node]] < quiet[arr[vertex]]:
                    arr[vertex] = arr[node]
                if not indegree[vertex]:
                    dq.append(vertex)
        return arr
```

Thanks for the visit, and I appreciate any comments.