# Simple SemaphoreSlim solution

**Author:** sandayuu
**Votes:** 4
**Link:** [https://leetcode.com/problems/building-h2o/solutions/2936109/](https://leetcode.com/problems/building-h2o/solutions/2936109/)

---

# Intuition
Simple SemaphoreSlim solution

# Approach
Use the SemaphoreSlim. For the count, we need to lock it for avoiding a race condition.

# Code
```
using System.Threading;
public class H2O {

    private int count = 0;
    private object _lock = new object();
    private SemaphoreSlim hSem = new SemaphoreSlim(2);
    private SemaphoreSlim oSem = new SemaphoreSlim(1);
    public H2O() {
        
    }

    public void Hydrogen(Action releaseHydrogen) {
        hSem.Wait();
        lock(_lock) {
            releaseHydrogen();
            count++;
            if (count % 2 == 0) {
                oSem.Release();
            }
        }
    }

    public void Oxygen(Action releaseOxygen) {
        oSem.Wait();
        // releaseOxygen() outputs "O". Do not change or remove this line.
        releaseOxygen();
        hSem.Release(2);
    }
}
```