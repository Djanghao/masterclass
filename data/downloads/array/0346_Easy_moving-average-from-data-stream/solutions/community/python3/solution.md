# [Python3] queue O(1) 68 ms, faster than 97.83%

**Author:** zhanweiting
**Votes:** 31
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/349863/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/349863/)

---

```
from collections import deque
class MovingAverage:
    def __init__(self, size: int):
        """
        Initialize your data structure here.
        """
        self.length = 0
        self.max = size
        self.sum = 0
        self.queue = deque()

    def next(self, val: int) -> float:
        if self.length < self.max:
            self.length +=1
            self.queue.append(val)
            self.sum += val
        else:
            self.sum -= self.queue.popleft()
            self.queue.append(val)
            self.sum += val
        return self.sum/self.length
        
```
**Complexity analysis**
* Time complexity:O(1)
	queue takes O(1) to Insert. 

* Space complexity:O(n),
	 where n is the size of queue.
	The algorithm needs to maintain two integers: sum and numVal, and a queue. So it uses linear space.