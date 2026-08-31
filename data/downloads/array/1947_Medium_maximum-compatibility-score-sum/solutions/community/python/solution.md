# Classical Dijkstra in Python with clear explanation (Similar with 1066)

**Author:** Lunius
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/1360825/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/1360825/)

---

This questions is similar to [1066. Campus Bike II](https://leetcode.com/problems/campus-bikes-ii/). Please also refer to my post: [Classical Dijkstra in Python with clear explanation](https://leetcode.com/problems/campus-bikes-ii/discuss/478958/classical-dijkstra-in-python-with-clear-explanation)

`Workers` -> `Students`, `Bikes` -> `Mentors`, Manhattan distance -> Hamming distance   

Here I reimplemented the same idea with a classical Dijkstra algorithm with explanations, for those who are interested in this classical algorithm. 

The code basically performs a state-based search, with certain kinds of `state` space and `cost`, with an `initial state` and a `termination condition`: 

`state` : a scheme of mentor assignment for the first `i` students, which can be denoted as a tuple (number of assigned students, status of all mentors). The status of all students can be denoted in multiple ways, here we use a bit string. (e.g. total 4 mentors, the first taken while the rest 3 available, '1000')

`cost` : total sum of Hanmming distances between the students and mentors assigned following a scheme.

`initial state`:  no students assigned any mentor, all mentors are in available status. (e.g. (0, '0000'))

`termination condition`: each student assigned a mentor. Since Dijkstra algorithm guarantees optimal cost when a node is closed, as well as BFS, so we can terminate the search when a scheme appears with last student assigned a mentor. 

The final results is `m*n - total sum of Hamming distances`.

Here is the code: 

```
import heapq
from collections import defaultdict

class Solution:
    def maxCompatibilitySum(self, students: List[List[int]], mentors: List[List[int]]) -> int:
        m, n = len(students), len(students[0])
        def hamming(student, mentor):
            return sum([int(student[i] != mentor[i]) for i in range(n)])
        
        pq = [(0, 0, '0'*m)] # state: (n-comp_score aka Hamming distance, number of assigned students, mentor status)
        optimal = defaultdict(lambda:float('inf'))
        
        while pq: # O(V)
            cost, i, mentor_status = heapq.heappop(pq) # O(logV)
            
            # early stopping with termination condition 
            if i == m:
                return m * n - cost
            
            # generate successors. The next student to be assigned is at index i
            for j, mentor in enumerate(mentors): # O(m)
                if mentor_status[j] != '1':
                    new_cost = cost + hamming(students[i], mentor)
                    new_mentor_status = mentor_status[:j] + '1' + mentor_status[j+1:]
                    
                    # update optimal cost if a new successor appears with lower cost to the same node
                    if new_cost < optimal[(i+1, new_mentor_status)]:
                        optimal[(i+1, new_mentor_status)] = new_cost
                        heapq.heappush(pq, (new_cost, i+1, new_mentor_status)) # O(logV)
                        
        return 0
```

**Complexity**
Given `V` is the number of vertices, `E` is the number of edges in the graph, the time complexity of Dijkstra with min Heap is `O(V*logV + V*E/V*logV) = O((V+E)logV)`. Here the `O(E/V)` denotes the average number of neighbors of a vertex, where the neighbors of each vertices is stored in an adjacency list. In this problem, the average number of neighbors of a vertex is bounded by `O(m)`, since at each step we are looking for a mentor for the next step. 

So the time complexity becomes: `O(V*logV + V*m*logV) = O(V(m+1)logV) = O(mVlogV)`, where `V`, the number of vertices, is bounded by O(`m!`), the number of permutations of `m` students, becasue each vertex denotes one possible way to assign at most `m`students to at most `m` mentors. And further more, `O(m!) <= O(m^m)`, so the time complexity is bounded as `<= O(m^(m+2)*log(m))`.