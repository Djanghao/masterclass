# Python - MinHeap

**Author:** cheatcode-ninja
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/2897930/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/2897930/)

---

```
class Solution:
    def maxStarSum(self, vals: List[int], edges: List[List[int]], k: int) -> int:
        
        m = defaultdict(list)                   # For each node, we will have min heap of size k which stores values                                                             # of Top-K nodes it is connected to.
        
        for x,y in edges:       
            
            if vals[y]>0:                       # If neighbor value is negative, our star will have more value without it.
                
                heapq.heappush(m[x], vals[y])   # For each node, push this neighbors value to its heap
                if len(m[x])>k:                 # If the Min-Heap size is more than K.                      
                    heapq.heappop(m[x])         # Pop the smallest Neighbour value as we can't use it anyway.             
            
            if vals[x]>0:
                heapq.heappush(m[y], vals[x])   # Repeat the same for other neighbor              
                if len(m[y])>k:
                    heapq.heappop(m[y])
            
            
        res = -math.inf
        for i in range(len(vals)):              # We'll try to maximize the star with each node being center
            tot = vals[i]                       # Our total will be value of that node as it has to be included.
            
            for nei_value in m[i]:              # We will check each value in the heap for the node.                      
                tot+=nei_value                  # We have already excluded neg values when pushing to Min-Heap
                
            res = max(res, tot)                 # We'll maximize our result
            
        return res                              
        
            
            
