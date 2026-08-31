# Python 3 non-cheesy solution with semaphores

**Author:** ilgor
**Votes:** 36
**Link:** [https://leetcode.com/problems/fizz-buzz-multithreaded/solutions/473848/](https://leetcode.com/problems/fizz-buzz-multithreaded/solutions/473848/)

---

My solution is similar to other Semaphore solutions, but it doesn't need math formulas to calculate how many times we should print fizz or buzz.
I feel that it's a code smell and not true to the spirit of multi-threading.
Instead I used **done** flag which is set by controlling thread and allows slave threads to peacefully finish on time without some extra inherent knowledge about the task.

Hope you'll like it.

```
# IDEA: use four semaphores with only number one starting unlocked, number-thread will loop numbers and distribute work
#       to other threads with releases, number-thread will set done flag when its loop finishes and other threads will break on this flag
#
class FizzBuzz:
    def __init__(self, n: int):
        self.done = False        
        self.n = n
        self.fSem = threading.Semaphore(0)
        self.bSem = threading.Semaphore(0)
        self.fbSem = threading.Semaphore(0)
        self.nSem = threading.Semaphore(1)

    # printFizz() outputs "fizz"
    def fizz(self, printFizz: 'Callable[[], None]') -> None:
        while True:
            self.fSem.acquire()
            if self.done: break
            printFizz()
            self.nSem.release()

    # printBuzz() outputs "buzz"
    def buzz(self, printBuzz: 'Callable[[], None]') -> None:
        while True:
            self.bSem.acquire()
            if self.done: break
            printBuzz()
            self.nSem.release()

    # printFizzBuzz() outputs "fizzbuzz"
    def fizzbuzz(self, printFizzBuzz: 'Callable[[], None]') -> None:
        while True:
            self.fbSem.acquire()
            if self.done: break
            printFizzBuzz()
            self.nSem.release()

    # printNumber(x) outputs "x", where x is an integer.
    def number(self, printNumber: 'Callable[[int], None]') -> None:
        for i in range(1, self.n+1):
            self.nSem.acquire()
            if i % 15 == 0:
                self.fbSem.release()
            elif i % 3 == 0:
                self.fSem.release()
            elif i % 5 == 0:
                self.bSem.release()
            else:
                printNumber(i)
                self.nSem.release()
        self.nSem.acquire() # needed so this thread waits to set done flag only when other threads are done with printing
        self.done = True
        self.fSem.release()  # let all other threads to break and finish
        self.bSem.release()  #
        self.fbSem.release() #
```