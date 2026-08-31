# Simple Python3 solution with queue (beats 95%)

**Author:** kunalnarang
**Votes:** 19
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/1796677/](https://leetcode.com/problems/design-hit-counter/solutions/1796677/)

---

```
from collections import deque
class HitCounter:
    """
    We maintain a queue for this problem. The init and hit (append) method are quite straightforward. 
    The main operation is performed in getHits.
    In getHits, we keep popping elements from the queue (while queue exists), only if the difference
    between the current timestamp and the first element of the queue is greater than or equal to 300.
    What this does is that the queue would remove all elements that have timestamp difference of more 
    than or equal to 300. What we are left is the queue with the closest 300 timestamps to the current
    timestamp. If we encounter a difference of less than 300, then this operation stops. Finally, the 
    length of the queue is the number of "hits" at the current timestamp.
    """
    def __init__(self):
        self.queue = deque()

    def hit(self, timestamp: int) -> None:
        self.queue.append(timestamp)

    def getHits(self, timestamp: int) -> int:
        while self.queue and timestamp - self.queue[0] >= 300:
            self.queue.popleft()
            
        return len(self.queue)
```