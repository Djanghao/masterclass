# Thoughts and Lessons from the Max Heap Solution

**Author:** basi4869
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/320839/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/320839/)

---

**Bottom Line**: When you are facing an optimization problem, take a second to think about the range of possble answers to the problem first. Getting some first ideas about this before approaching the problem may save you a lot of efforts.

My first reaction to this problem is to maintain a priority queue (max heap) to keep the segment that currently has the longest distance between adjacent stations on top. At each iteration, build another station into this top segment and push it back into the max heap, until you have exhausted all `K` new stations. The result to be returned is the distance between adjacent stations in the top segment.

I implemented this, and it throws TLE onto my face.
```python
import heapq

class Solution:
    def minmaxGasDist(self, stations: List[int], K: int) -> float:
        # maintain a max heap and alway cut the maximum length segment
        max_heap = []
        for i in range(1, len(stations)):
            # ((negative) max distance inside the segment, index of the end station, number of cuts so far)
            heapq.heappush(max_heap, (-float(stations[i] - stations[i-1]), i, 1))
        
        added = 0  # keeps track of the number of new stations built
        while added < K:
            cur_dist, i, cur_added = heapq.heappop(max_heap)
            heapq.heappush(max_heap, (-float(stations[i] - stations[i-1])/(cur_added+1), i, cur_added+1))
            added += 1
        
        return -max_heap[0][0]
```

The reason for TLE is due to cases where we have very large number of `K`. The above solution is `O(KlgN)`, and in some test cases, notably the one that it failed, has very large `K`. The remedy, however, is to realize that we don't have to consider adding new stations from `1` to `K`. There is a lower bound of the answer to this problem, that is **the distance between two adjacent stations when we evenly place K new stations between the orignal first and last stations, ignoring all other original stations in the middle**. The result of that scheme is `lower_bound = (stations[-1] - stations[0]) / (K+1)`. Therefore, instead of initializing the max heap by pushing the original segments with 0 new stations into it, we initialize by installing `needed` number of new stations in each segment such that the distance between two adjacent stations within that segment is no larger than `lower_bound`. Take a minute to think about it and you should be able to convince yourself that now we only have approximately `N` new stations left to place, which brings down the time complexity to `O(NlgN)`.

```python
import heapq
import math

class Solution:
    def minmaxGasDist(self, stations: List[int], K: int) -> float:
        # priority queue
        # the lower bound of the solution is the entire length divided by (K+1)
        bound = (stations[-1] - stations[0]) / (K + 1)
        added = 0  # keeps track of the stations already built
        max_heap = []
        for i in range(1, len(stations)):
            needed = math.ceil((stations[i] - stations[i-1]) / bound) - 1
            heapq.heappush(max_heap, (-(stations[i] - stations[i-1])/(needed+1), i, needed))
            added += needed
        
        while added < K:
            cur, i, needed = heapq.heappop(max_heap)
            needed += 1
            heapq.heappush(max_heap, (-(stations[i] - stations[i-1])/(needed+1), i, needed))
            added += 1
        
        return -max_heap[0][0]
```

And now things work out nicely. The key is really to realize that there is a natural lower bound for the answer to this problem. And we probably should all think a little bit about what values the answer could possbly take before we even determine what approach to take to solve the problem algorithmically.