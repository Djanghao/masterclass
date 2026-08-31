# [Python] Binary Search

**Author:** gaddiel26
**Votes:** 4
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/582527/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/582527/)

---

The idea is to create a dictionary of color to indices mapping, where the`key is color` and `value are the indices`. 

Then for every `idx-color` pair in the query, perform binary search to find the shortest distance to the target `color`.

Below is the implementation in Python:
```
from collections import defaultdict

class Solution(object):
    def shortestDistanceColor(self, colors, queries):
        """
        :type colors: List[int]
        :type queries: List[List[int]]
        :rtype: List[int]
        """
        color_indices = defaultdict(list)
        for idx, color in enumerate(colors):
            color_indices[color].append(idx)
        
        ans = [0] * len(queries)
        
        for i, (target_idx, target_col) in enumerate(queries):
            if colors[target_idx] != target_col:
                shortest_dist = self.get_shortest_from(color_indices[target_col], target_idx)
                if shortest_dist == float('inf'):
                    shortest_dist = -1
                    
                ans[i] = shortest_dist
        
        return ans
    
    def get_shortest_from(self, indices, target):
        left, right = 0, len(indices) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if indices[mid] == target:
                return 0
            elif indices[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        
        dist_left, dist_right = float('inf'), float('inf')
        
        if right >= 0:
            dist_right = abs(indices[right] - target)
        
        if left < len(indices):
            dist_left = abs(indices[left] - target)
        
        return min(dist_right, dist_left)
```