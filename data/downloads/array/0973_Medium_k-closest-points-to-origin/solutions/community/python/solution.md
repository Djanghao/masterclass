# Easy to read Python min heap solution ( beat 99% python solutions )

**Author:** TurtleShip
**Votes:** 365
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/294389/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/294389/)

---

We keep a min heap of size K.
For each item, we insert an item to our heap.
If inserting an item makes heap size larger than k, then we immediately pop an item after inserting ( `heappushpop` ).

Runtime: 
Inserting an item to a heap of size k take `O(logK)` time.
And we do this for each item points.
So runtime is `O(N * logK)` where N is the length of `points`.

Space: O(K) for our heap.
```
import heapq

class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        
        heap = []
        
        for (x, y) in points:
            dist = -(x*x + y*y)
            if len(heap) == K:
                heapq.heappushpop(heap, (dist, x, y))
            else:
                heapq.heappush(heap, (dist, x, y))
        
        return [(x,y) for (dist,x, y) in heap]
```

I found it interesting that my solution ran much faster than "Divide And Conquer" solution under "Solution" tab which is supposed to run in O(N). 
Mine ran at 316ms while D&C solution ran at 536 ms.

I am guessing that the D&C solution ran much slower than mine because it used recursions which would involved creating callstacks.