# ☠️🔥✅✅My Python3 Solution during contest 12-04-2024 beats 💯 ✅✅🔥☠️

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5017269/](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5017269/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)

![Screenshot 2024-04-13 214034.png](./images/1.png)
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import heapq
class Solution(object):
    def minimumTime(self, n, edges, disappear):
        """
        :type n: int
        :type edges: List[List[int]]
        :type disappear: List[int]
        :rtype: List[int]
        """
        graph = {i : [] for i in range(n)}
        for u, v, length in edges:
            graph[u].append((v, length))
            graph[v].append((u, length))
        min_times = [-1] * n
        min_heap = [(0, 0)] 
        
        while min_heap:
            time, node = heapq.heappop(min_heap)
            if min_times[node] != -1:
                continue
            min_times[node] = time
            for neighbour, length in graph[node]:
                if time + length < disappear[neighbour] or disappear[neighbour] == -1:
                    heapq.heappush(min_heap, (time + length, neighbour))
        
        return min_times
```
# Please upvote if you find it useful Thanks guy's 
![th.jpeg](./images/2.jpeg)
