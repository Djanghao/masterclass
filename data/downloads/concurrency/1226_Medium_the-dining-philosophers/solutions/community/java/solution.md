# Bad Test Cases

**Author:** vanchanr
**Votes:** 10
**Link:** [https://leetcode.com/problems/the-dining-philosophers/solutions/1753556/](https://leetcode.com/problems/the-dining-philosophers/solutions/1753556/)

---

I think the TCs aren't designed well

A simple solution with a single semaphore is able to pass the TCs under 10ms (better than 92% of java solutions)
* which leads to starvation (same philosopher may be entering the critical section again and again while some may not be getting a chance at all)
* under utilization of resources (philosopher with id=2 also gets blocked when philosopher with id=0 acquires the semaphore, but ideally he can pick up his forks and start eating)

```
class DiningPhilosophers {
    Semaphore s = new Semaphore(1);

    public DiningPhilosophers() {
        
    }

    // call the run() method of any runnable to execute its code
    public void wantsToEat(int philosopher,
                           Runnable pickLeftFork,
                           Runnable pickRightFork,
                           Runnable eat,
                           Runnable putLeftFork,
                           Runnable putRightFork) throws InterruptedException {
        
        s.acquire();
        pickLeftFork.run();
        pickRightFork.run();
        eat.run();
        putLeftFork.run();
        putRightFork.run();
        s.release();
    }
}
```