# max_heap or sorting

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5078923/](https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5078923/)

---

1. Different pot holes have different prices:
if a pothole starts the streak, the cost is `2`, if continue existing streak `1` (e.g. xxxx -> 2111)
This leads to a conclusion that it's better to fix `xx` (cost 2+1) instead of `x.x` (2+2)
> Problem's example `x.x.xxx...x` might lead you to **wrong greedy**: pick all that you can budget.
> 
based on the observation above we can now provide our own example (always do it!):
> New example `x.x.x.xxxx b=5` (wrong greedy: `2+2` -> 2 potholes, correct: `2+1+1+1` -> 4 potholes) 
> 
2. Use `heap/pq`: heapify O(s + klogs) or `sorting`: O(slogs + k), where s - # of continuous pothole segments, k - number of segments within budget, and work with the biggest continuous segments.

```
class Solution:
    def maxPotholes(self, road: str, budget: int) -> int:
        max_heap = []
        count = 0
        for c in road:
            if c == 'x':
                count += 1
            else:
                max_heap.append(-count) # add sequential x
                count = 0
        if count:
            max_heap.append(-count)
		
		# heap
        heapify(max_heap)
        res = 0
        while max_heap and budget > 1:
            potholes = min(-heappop(max_heap), budget - 1) # pick potholes that we can fix with the budget
            res += potholes
            budget -= potholes + 1
        return res

        # sorting
        max_heap.sort()
        res = 0
        for potholes in max_heap:
            if budget < 2:
                break
            potholes = min(-potholes, budget - 1)
            res += potholes
            budget -= potholes + 1
        return res
```