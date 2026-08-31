# Python solution and explanation (with semaphores and barrier)

**Author:** jcrubio
**Votes:** 35
**Link:** [https://leetcode.com/problems/building-h2o/solutions/430200/](https://leetcode.com/problems/building-h2o/solutions/430200/)

---

This solution uses `Semaphore` and `Barrier`. It is simple to understand, and performs well.

## Semantics
*  a `Semaphore` --  trying to acquire it, is possible if there are `tokens` left. Otherwise the thread that tried is asked to wait until a different thread returns the tokens it was using.
* a `Barrier` -- if a thread reaches it, it can cross it, only if a predefined number of other threads have also arrived.

## Logic
The solution creates 1 `Semaphore` for Hydrogen, and allows 2 threads to aquire it concurrently. Likewise, we create one for Oxygen, but this one only allows 1 thread.

To ensure the molecule is generated at once, we use a barrier, which can only be crossed when 3 atoms have gathered.

After each function completes, we release the token on the `Semaphore`.

## Tip
As others have explained, we can use [_Python_ context managers](https://docs.python.org/3.8/library/threading.html#using-locks-conditions-and-semaphores-in-the-with-statement), which makes the code easier to follow.
```
## WITH context (with)
sem = Semaphore(3)

with sem:
    # code...
```
is equivalent to
```
## WITHOUT context
sem = Semaphore(3)

sem.acquire()
try:
    # code...
finally:
    sem.release()
```

## Solution

```
from threading import Semaphore
from threading import Barrier

class H2O:
    def __init__(self):
        self.sem_h = Semaphore(2)
        self.sem_o = Semaphore(1)
        self.bar_assembling = Barrier(3)


    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:

        with self.sem_h:
            self.bar_assembling.wait()

            releaseHydrogen()



    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:

        with self.sem_o:
            self.bar_assembling.wait()

            releaseOxygen()
```