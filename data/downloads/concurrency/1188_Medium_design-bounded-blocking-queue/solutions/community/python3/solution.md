# Python3, concise, 28ms, 100% using Lock, 36 ms using Condition

**Author:** fellowdudeman
**Votes:** 45
**Link:** [https://leetcode.com/problems/design-bounded-blocking-queue/solutions/442797/](https://leetcode.com/problems/design-bounded-blocking-queue/solutions/442797/)

---

Simple implementation with 2 locks
```
from collections import deque
from threading import Lock

class BoundedBlockingQueue(object):

    def __init__(self, capacity: int):
        self.en, self.de = Lock(), Lock()
        self.q = deque()
        self.capacity = capacity
        self.de.acquire()

    def enqueue(self, element: int) -> None:
        self.en.acquire()
        self.q.append(element)
        if len(self.q) < self.capacity:
            self.en.release()
        if self.de.locked():
            self.de.release()

    def dequeue(self) -> int:
        self.de.acquire()
        val = self.q.popleft()
        if len(self.q):
            self.de.release()
        if val and self.en.locked():
            self.en.release()
        return val
        
    def size(self) -> int:
        return len(self.q)
	
```

Simple implementation with Condition
```
from collections import deque
from threading import Condition

class BoundedBlockingQueue(object):

    def __init__(self, capacity: int):
        self.c = Condition()
        self.q = deque()
        self.capacity = capacity

    def enqueue(self, element: int) -> None:
        with self.c:
            self.c.wait_for(lambda: len(self.q) < self.capacity)
            self.q.append(element)
            self.c.notify_all()

    def dequeue(self) -> int:
        with self.c:
            self.c.wait_for(lambda: len(self.q) > 0)
            val = self.q.popleft()
            self.c.notify_all()
            return val
        
    def size(self) -> int:
        return len(self.q)
```