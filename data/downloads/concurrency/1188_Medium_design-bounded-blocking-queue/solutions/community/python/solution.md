# Python3 condition variable - Design Bounded Blocking Queue

**Author:** r0bertz
**Votes:** 9
**Link:** [https://leetcode.com/problems/design-bounded-blocking-queue/solutions/764289/](https://leetcode.com/problems/design-bounded-blocking-queue/solutions/764289/)

---

```
import threading

class BoundedBlockingQueue(object):

    def __init__(self, capacity: int):
        self.cv = threading.Condition()
        self.q = deque()
        self.cap = capacity

    def enqueue(self, element: int) -> None:
        with self.cv:
            while len(self.q) == self.cap:
                self.cv.wait()
            self.q.append(element)
            self.cv.notify()

    def dequeue(self) -> int:
        ans = 0
        with self.cv:
            while not self.q:
                self.cv.wait()
            ans = self.q.popleft()
            self.cv.notify()
        return ans

    def size(self) -> int:
        return len(self.q)
```