# You'll finally understand this :)

**Author:** pkonduri
**Votes:** 5
**Link:** [https://leetcode.com/problems/k-empty-slots/solutions/746033/](https://leetcode.com/problems/k-empty-slots/solutions/746033/)

---

I really struggled to wrap my head around this. So here's to head unwrapping.


Let's keep track of a sorted list called `timePassed`. Every day, we'll ***insert*** a single value to this list. What value? It'll be the bulb that we're turning on for today. Every time we insert a value at position `cur`, we'll check its neighboring bulbs (at positions `cur-1` and `cur+1`). If either neighbor is `K` apart from the current, then we return today as our answer. 


**Question**: How do we check if either neighboring bulb is `K` apart from the bulb turned on today? We use `abs(timePassed[cur] - timePassed[cur-1]) == K+1`, `abs(timePassed[cur] - timePassed[cur+1]) == K+1 `



**Example**: Our input `bulbs = [1,3,2], K=1`. Note that this means the indexes have to be `K+1` apart.
- On day 1: `timePassed = [1]`. This means bulb 1 is turned on on day 1. 
- On day 2, `timePassed = [1,3]`. This means bulb 3 is turned on on day 2. What's the neighbor of bulb 3 in `timePassed`? It's bulb 1. And how far apart are they? `3 - 1 =K+1`. So we return day 2. 

**Code**
```
import bisect
class Solution(object):
    def kEmptySlots(self, bulbs, K):

        timePassed = []
        for i, bulb in enumerate(bulbs):
            # Where do we insert today's bulb?
            insertLoc = bisect.bisect_left(timePassed, bulb)
            timePassed.insert(insertLoc, bulb)
            v1, v2 = 0, 0
            # Location of our neighboring bulbs
            prevLoc, nextLoc = insertLoc - 1, insertLoc + 1
            # Check if either neighbor is K apart from the bulb turned on today
            if prevLoc >= 0:
                if abs(timePassed[prevLoc] - timePassed[insertLoc]) == K + 1:
                    v1 = max(bulbs[timePassed[prevLoc]-1], bulbs[timePassed[insertLoc]-1])
            if nextLoc < len(timePassed):
                if abs(timePassed[insertionPoint] - timePassed[nextLoc]) == K + 1:
                    v2 = max(bulbs[timePassed[insertLoc]-1], bulbs[timePassed[nextLoc]-1])
            if v1 or v2:
                return len(timePassed)

        return -1
```