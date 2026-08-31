# Easy || PYTHON SOLUTION

**Author:** raghavdabra
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-dining-philosophers/solutions/2725289/](https://leetcode.com/problems/the-dining-philosophers/solutions/2725289/)

---

```
from threading import Semaphore

class DiningPhilosophers:
    def __init__(self):
        self.sizelock = Semaphore(4)
        self.locks = [Semaphore(1) for _ in range(5)]

    def wantsToEat(self, index, *actions):
        left, right = index, (index - 1) % 5
        with self.sizelock:
            with self.locks[left], self.locks[right]:
                for action in actions:
                    action()
```