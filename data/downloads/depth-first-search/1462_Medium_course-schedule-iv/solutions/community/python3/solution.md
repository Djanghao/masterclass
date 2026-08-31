# [python3][Topological Sort][BFS] Clear solution with comments

**Author:** chenhanxiong1990
**Votes:** 18
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/1482483/](https://leetcode.com/problems/course-schedule-iv/solutions/1482483/)

---

Summary: the idea is to use topological sort to create a prerequisite lookup dictionary. 

Since this method is query-intensive, so we need to have O(1) time for query. In this case, we need to create a dictionary with each course as the key and the value is a set including all the prerequisites of this course. This lookup dictionary can be created by doing topological sort. 

```
from collections import defaultdict, deque

class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        neighbors = {node: set() for node in range(numCourses)}    # store the graph
        indegree = defaultdict(int)     # store indegree info for each node
        pre_lookup = defaultdict(set)   # store the prerequisites info for each node
        
        # create the graph
        for pre, post in prerequisites:
            neighbors[pre].add(post)
            indegree[post] += 1
        
        # add 0 degree nodes into queue for topological sort
        queue = deque([])
        for n in neighbors:
            if indegree[n] == 0:
                queue.append(n)
        
        # use BFS to do topological sort to create a prerequisite lookup dictionary
        while queue:
            cur = queue.popleft()
            for neighbor in neighbors[cur]:
                pre_lookup[neighbor].add(cur)                   # add current node as the prerequisite of this neighbor node
                pre_lookup[neighbor].update(pre_lookup[cur])    # add all the preqs for current node to the neighbor node's preqs
                
                indegree[neighbor] -= 1         # regular topological search operations
                if indegree[neighbor] == 0:
                    queue.append(neighbor)
        
        # traverse the queries and return the results
        result = [True if q[0] in pre_lookup[q[1]] else False for q in queries]
        
        return result
```

