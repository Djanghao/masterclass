# O(NlogN) Dijkstras Algo + Monotonic Stack [Python]

**Author:** xmf2019-
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-viii/solutions/3892055/](https://leetcode.com/problems/jump-game-viii/solutions/3892055/)

---

Using Monotonic stack to compute the adj(neighbors) for each index
And then use dijkstras to compute the shortest path with cost

```
class Solution:
    def minCost(self, nums: List[int], costs: List[int]) -> int:
        
        adj = [set([i + 1]) for i in range(len(nums) - 1)]
        adj.append(set())
        
        stack = [(nums[0], 0)]
        
        for i in range(1, len(nums)):
            while stack and stack[-1][0] <= nums[i]:
                adj[stack[-1][1]].add(i)
                stack.pop(-1)
            stack.append((nums[i], i))
            
        stack = [(nums[0], 0)]
        for i in range(1, len(nums)):
            while stack and stack[-1][0] > nums[i]:
                adj[stack[-1][1]].add(i)
                stack.pop(-1)
            stack.append((nums[i], i))

        heap = [(0, 0)]  # (cost, index)
        visited = set()
        
        while heap:
            top = heapq.heappop(heap)
            visited.add(top[1])
            
            if top[1] == len(nums) - 1:
                return top[0]
            
            for index in adj[top[1]]:
                if index not in visited:
                    heapq.heappush(heap, (top[0] + costs[index], index))
        
        return -1
```