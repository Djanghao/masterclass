# like a boss, 0ms thinking solution =))

**Author:** alexm25890
**Votes:** 20
**Link:** [https://leetcode.com/problems/building-h2o/solutions/749091/](https://leetcode.com/problems/building-h2o/solutions/749091/)

---

```
import java.util.concurrent.*;

class H2O {
    
    private final CyclicBarrier barrier = new CyclicBarrier(3);
    private final Semaphore hSem = new Semaphore(2);
    private final Semaphore oSem = new Semaphore(1);

    public H2O() {
        
    }

    public void hydrogen(Runnable releaseHydrogen) throws InterruptedException {
		try {
            hSem.acquire();
            barrier.await();
             // releaseHydrogen.run() outputs "H". Do not change or remove this line.
            releaseHydrogen.run();
        } catch(Exception ignore) {
            
        } finally {
            hSem.release();
        }

    }

    public void oxygen(Runnable releaseOxygen) throws InterruptedException {
        try {
            oSem.acquire();
            barrier.await();
            // releaseOxygen.run() outputs "O". Do not change or remove this line.
            releaseOxygen.run();
        } catch(Exception ignore) {
            
        } finally {
            oSem.release();
        }
    }
}
```