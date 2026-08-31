# Python3 || BFS , queue || T/S: 99% / 14%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/5841422/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/5841422/)

---

Here's the intuition:

The time for each node to send the mesaage, get a reply, and have its last message arrive is strictly a function of its *distance* and its *patience*. There's really no interaction among the other nodes that would affect the its time. So we just solve *n* idenital problems and determine the greatest time used for all.

Here's the plan:
1. We determine *time* as a function of *distance* and *patience*.
2. We determine the distance of each node from *node zero*.

3. We map the *time* function to the other nodes and return the greatest value rendered.

```python3 []
class Solution:
    def networkBecomesIdle(self, edges: List[List[int]], patience: List[int]) -> int:
        
        def time(dis_pat: tuple)-> int:                     # <-- 1
            dis, pat = dis_pat
            msgs = (dis - 1) // pat
            return msgs * pat + dis + 1


        dist, graph = [-1]*len(patience), defaultdict(list)
        dist[0] = 0 
        queue = deque([0])
           
        for u, v in edges: 
            graph[v].append(u)
            graph[u].append(v)

        while queue:                                        # <-- 2
            node = queue.popleft()

            for neighbor in graph[node]:
               
                if dist[neighbor] == -1:
                    dist[neighbor] = dist[node] + 2
                    queue.append(neighbor)

        return max(map(time, zip(dist[1:], patience[1:])))  # <-- 3
```
[https://leetcode.com/problems/the-time-when-the-network-becomes-idle/submissions/1404346269/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/submissions/1404346269/)


I could be wrong, but I think that time complexity is *O*(*N* + *E*) and space complexity is *O*(*N*), in which *N* ~ `len(patience)` and  *E* ~ `len(edges)`.

```