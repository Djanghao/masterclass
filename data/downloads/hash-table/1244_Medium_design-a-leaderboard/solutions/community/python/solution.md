# Python (both heap and pure map solutions)

**Author:** ermolushka2
**Votes:** 17
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/745826/](https://leetcode.com/problems/design-a-leaderboard/solutions/745826/)

---

The difference between two solutions is about Time complexity for the `top` function: `nlogn` for the `sorted` function and `nlogk` for the heap.

```
class Leaderboard(object):

    def __init__(self):
        
        self.d = defaultdict(int)
        

    def addScore(self, playerId, score):
        """
        :type playerId: int
        :type score: int
        :rtype: None
        """
        self.d[playerId] += score
        

    def top(self, K):
        """
        :type K: int
        :rtype: int
        """
        return sum(sorted(self.d.values(), reverse=True)[:K])
        

    def reset(self, playerId):
        """
        :type playerId: int
        :rtype: None
        """
        del self.d[playerId]
```		
`Heap`

```
from heapq import *

class Leaderboard(object):

    def __init__(self):
        
        self.d = defaultdict(int)
        

    def addScore(self, playerId, score):
        """
        :type playerId: int
        :type score: int
        :rtype: None
        """
        self.d[playerId] += score
        

    def top(self, K):
        """
        :type K: int
        :rtype: int
        """
        heap = []
        for x in self.d.values():
            heappush(heap, x)
            if len(heap) > K:
                heappop(heap)
        res = 0
        while heap:
            res += heappop(heap)
        return res
        

    def reset(self, playerId):
        """
        :type playerId: int
        :rtype: None
        """
        del self.d[playerId]
```

Upvote if you like it.