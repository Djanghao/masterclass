# Python min heap, commented, O(nlg(candidates)) time, O(candidates) space

**Author:** naruto-uzumaki
**Votes:** 8
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/2783139/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/2783139/)

---

We maintain a heap of candidates, and whenever we remove an element from the heap we've to replenish it from same side.  
Remaining elements (which are not yet candidates) will be a contiguous block in the middle so we just need to store left and right indices of remaining elements (instead of using a deque or something to store all the individual elements).  
Heap element is (cost, index) so that first it's compared by cost then by index to break ties. Index changes due to removal does not matter as index is only used for comparison and the removal does not alter the relative ordering of other indices. The index is also useful for knowing whether the element was taken from left side candidates or right side candidates so that we can replenish from same side.   
Lastly, in the case of fewer than candidate workers remaining, the heap is no longer replenished, but removing from the heap still takes the element with smallest cost so the problem constraint is automatically satisfied.

### Complexity analysis
Heap size is at most `2*candidates` at any point of time.
Time complexity: `O(n lg(candidates))` -> k can be at most n and for each iteration, we're doing heap pop/push which takes `O(lg(2*candidates)) = O(lg(candidates))` 
Space complexity: `O(candidates)` -> we're only maintaining heap which is bounded by `2*candidates`

```python

class Solution:
    def totalCost(self, costs: List[int], k: int, candidates: int) -> int:
        n = len(costs)
        cand_heap = [] # Heap of candidates; hp elem (cost, inx)
        
        # remaining elems bounds
        left_bound, right_bound = candidates, n-candidates-1
        
        # add left candidates
        for i in range(candidates):
            heapq.heappush(cand_heap, (costs[i], i))
        
        # add right candidates, (exclude already taken from left)
        for i in reversed(range(n-candidates, n)):
            if i < left_bound:
                break
            heapq.heappush(cand_heap, (costs[i], i))
        
        total_cost = 0
        for _ in range(k):
            cost, inx = heapq.heappop(cand_heap)
            total_cost += cost
            if left_bound <= right_bound: # if there are remaining elements
                if inx < left_bound: # if cur elem was from left, replenish from left
                    heapq.heappush(cand_heap, (costs[left_bound], left_bound))
                    left_bound += 1
                elif inx > right_bound: # if cur elem was from right, replenish from right
                    heapq.heappush(cand_heap, (costs[right_bound], right_bound))
                    right_bound -= 1
        return total_cost                    
```