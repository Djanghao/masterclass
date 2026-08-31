# Python Simple Dijkstra Beats ~90%

**Author:** constantine786
**Votes:** 63
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/2036405/](https://leetcode.com/problems/network-delay-time/solutions/2036405/)

---

**Time - O(N + ELogN)** -Standard Time complexity of [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm#Running_time)

**Space - O(N + E)** - for adjacency list and maintaining Heap.

```
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:        
        adj_list = defaultdict(list)
        
        for x,y,w in times:
            adj_list[x].append((w, y))
        
        visited=set()
        heap = [(0, k)]
        while heap:
            travel_time, node = heapq.heappop(heap)
            visited.add(node)
            
            if len(visited)==n:
                return travel_time
            
            for time, adjacent_node in adj_list[node]:
                if adjacent_node not in visited:
                    heapq.heappush(heap, (travel_time+time, adjacent_node))
                
        return -1
```

--- 

***Please upvote if you find it useful***