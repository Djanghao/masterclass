# Java Semaphore with explaination

**Author:** Flora1155665
**Votes:** 18
**Link:** [https://leetcode.com/problems/print-foobar-alternately/solutions/334574/](https://leetcode.com/problems/print-foobar-alternately/solutions/334574/)

---

The argument to the Semaphore instance is the number of "permits" that are available. It can be any integer, not just 0 or 1.
For `runb` all acquire() calls will block and tryAcquire() calls will return false, until you do a release().
For `runf` the first acquire() calls will succeed and the rest will block until the first one releases.


```
import java.util.concurrent.*;
class FooBar {
    private int n;
    Semaphore runf, runb;
    
    public FooBar(int n) {
        this.n = n;
        runf = new Semaphore(1);
        runb = new Semaphore(0);
    }

    public void foo(Runnable printFoo) throws InterruptedException {
        
        for (int i = 0; i < n; i++) {
        	runf.acquire();
            printFoo.run();
            runb.release();
        }
    }

    public void bar(Runnable printBar) throws InterruptedException {
        
        for (int i = 0; i < n; i++) {
            runb.acquire();
        	printBar.run();
            runf.release();
        }
    }
}
```