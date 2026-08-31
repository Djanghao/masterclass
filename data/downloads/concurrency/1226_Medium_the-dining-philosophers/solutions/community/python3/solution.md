# Python3 by using Lock, beats 97.93%

**Author:** nightybear
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-dining-philosophers/solutions/427836/](https://leetcode.com/problems/the-dining-philosophers/solutions/427836/)

---

Attached is my solution using Lock. 

I try to limit only one even philosopher can eat at the same time, so that the odd philosophers will not be blocked. Feel free to discuss.

-- update, improve to 100% by removing  the even lock.

``` python

from threading import Lock

class DiningPhilosophers:
    
    forks = [Lock() for _ in range(5)]
    even = Lock()
    
    # call the functions directly to execute, for example, eat()
    def wantsToEat(self,
                   philosopher: int,
                   pickLeftFork: 'Callable[[], None]',
                   pickRightFork: 'Callable[[], None]',
                   eat: 'Callable[[], None]',
                   putLeftFork: 'Callable[[], None]',
                   putRightFork: 'Callable[[], None]') -> None:
        
        i = philosopher
        if i % 2 == 0:
            self.even.acquire()
            
        right_fork = i
        left_fork = (i+1) % 5
        
        self.forks[right_fork].acquire()
        self.forks[left_fork].acquire()
        pickRightFork()
        pickLeftFork()
        eat()
        putLeftFork()
        putRightFork()
        self.forks[right_fork].release()
        self.forks[left_fork].release()
        if i % 2 == 0:
            self.even.release()

```