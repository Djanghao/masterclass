# Simple Rust Solution

**Author:** aquirdturtle
**Votes:** 0
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/5186028/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/5186028/)

---

# Intuition
A relatively brute force solution

# Approach
For each garden, check connections for any already recorded flower types, then find an available flower type, record, and continue. 

To avoid having to iterate through the paths to find connections for each garden, first convert the paths list to a map of garden to connected gardens.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def gardenNoAdj(self, num: int, paths: List[List[int]]) -> List[int]:
        answer = []
        all_flowers = {1,2,3,4}
        connected_dict = defaultdict(set)
        for path in paths:
            connected_dict[path[0]].add(path[1])
            connected_dict[path[1]].add(path[0])
        for garden in range(num):
            connected_flowers = set()
            for connected in connected_dict[garden+1]: # at most 3
                if connected < garden + 1:
                    connected_flowers.add(answer[connected-1])
            # for path in paths:
            #     if garden+1 in path:
            #         conn_n = path[1] if garden+1 == path[0] else path[0]
            #         if conn_n < garden+1: # else hasn't been assigned yet
            #             connected_flowers.add(answer[conn_n-1])
            avail_flowers = all_flowers - connected_flowers
            answer.append(list(avail_flowers)[0])
        return answer
```