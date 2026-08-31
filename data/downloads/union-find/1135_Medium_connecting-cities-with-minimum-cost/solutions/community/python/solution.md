# [python3] dictionary and min_heap to implement Prim's algorithm

**Author:** zhanweiting
**Votes:** 13
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/348271/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/348271/)

---

* use a dictionary to store the information.
    The key is a city.
    The value is a tuple.  The first element in the tuple is the neighbor to the key's city, and the second element in the tuple is the cost from the neighbor city to the key's city. There will be multiple cities connected to the key's city.

```
Input: N = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]

neighbor = {
			1: (2,5),(3,6)
			2: (1,5),(3,1)
			3: (1,6),(2,1)
			}
```
* Use a minimum heap to store the cost and neighbors of the current city. The minimum heap sorts the cost in ascending order. So each time the neighbor pop from the heap will be the neighbor who has the least cost to the current city.
```
mini_heap = [(cost from current city to neighbor to current city, neighbor to current city )]
```
```
from collections import defaultdict
from heapq import heappop, heappush
class Solution:
    def minimumCost(self, N: int, connections: List[List[int]]) -> int:
        neighbor = defaultdict(list)
        for i, j, c in connections:
            neighbor[i].append((j, c))
            neighbor[j].append((i, c))
        #print(nbrs)    
        res = 0
        mini_heap = [(0,1)]
        visited = set()
        while mini_heap:
            c, i = heappop(mini_heap)
            if i in visited:
                continue
            else:
                visited.add(i)
                res += c
                if len(visited) == N: 
                    return res
                else:
                    for j, c in neighbor[i]:
                        if j in visited: 
                            continue
                        else:
                            heappush(mini_heap, (c, j))
        return -1
```