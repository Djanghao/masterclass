# [Python] Dijkstra + DP solution (60-70% faster)

**Author:** lluB
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/2102405/](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/2102405/)

---

## Logic
- Dijkstra algorithm can only get the shortest time from src to dst.
- What we want to get is **the number of ways with minimum time from src to dst.**
- We need
	1) **times** array : to check the minimum time to take from src to times[i].
	2) **ways** array : to check the total ways from src to ways[i] within minimum time.

- if find same time path... update **ways** only 
 ... because we don't need to update time 
 ... and we don't need to go to that node(already in our heap)


## EX1
**times**    [INF, INF, INF, INF, INF, INF] => [0, 2, 5, 5, 6, 7]
**ways**      [0, 0, 0, 0, 0, 0] => [1, 1, 1, 1, 1, 2, 4]


## Reference
Idea and code from ... #happycoding
https://www.youtube.com/watch?v=1JCXqupyLoQ&t=465s



```
class Solution:
    def countPaths(self, n: int, roads: List[List[int]]) -> int:

        #1. graph
        graph = collections.defaultdict(list)
        for u, v, t in roads:
            graph[u].append((v, t))
            graph[v].append((u, t))
            
        #2. times, ways array initializer
        times = [float('inf')] * n
        ways = [0] * n
        
        times[0] = 0
        ways[0] = 1
        
        #3. dijkstra
        pq = [(0, 0)] # time, node
        
        while pq:
            old_t, u = heapq.heappop(pq) # current time, current node
            
            for v, t in graph[u]:
                new_t = old_t + t
                
                # casual logic: update shorter path
                if new_t < times[v]:
                    times[v] = new_t
                    ways[v] = ways[u]
                    heapq.heappush(pq, (new_t, v))
                
                # if find same time path... update ways only
                elif new_t == times[v]:
                    ways[v] += ways[u]
                
        modulo = 10 ** 9 + 7
        
        return ways[n-1] % modulo
```

**Please upvote if it helped! :)**