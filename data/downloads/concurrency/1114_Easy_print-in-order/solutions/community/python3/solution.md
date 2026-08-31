# Python 3 | 56ms | Lock vs Event

**Author:** andnik
**Votes:** 37
**Link:** [https://leetcode.com/problems/print-in-order/solutions/394392/](https://leetcode.com/problems/print-in-order/solutions/394392/)

---

The fastest solution for the problem is to use Lock mechanism. See the following code with comments:
```python3
import threading

class Foo:
    def __init__(self):
		# create lock to control sequence between first and second functions
        self.lock1 = threading.Lock()
		self.lock1.acquire()
		
		# create another lock to control sequence between second and third functions
        self.lock2 = threading.Lock()
        self.lock2.acquire()

    def first(self, printFirst: 'Callable[[], None]') -> None:
        printFirst()
		
		# since second function is waiting for the lock1, let's release it
        self.lock1.release()

    def second(self, printSecond: 'Callable[[], None]') -> None:
		# wait for first funtion to finish
        self.lock1.acquire()
        
		printSecond()
		
		# let's release lock2, so third function can run
        self.lock2.release()

    def third(self, printThird: 'Callable[[], None]') -> None:
		# wait for second funtion to finish
        self.lock2.acquire()
		
        printThird()
```
Now, when I was solving the problem the result was showing only 76 ms, which is far from the fastest. If you encounter similar issue take into account that you are working with threading and the timing is very unpredictable when CPU decides to switch threads. This can cause different timing results.

As an alternative you can use other synchronization mechanisms, such as Semaphore or Event. If you peek into CPython code you will see both Event and Semaphore are using Lock inside. That means that technically Lock solution is the fastest.

But for the reference here is solution with Event synchronization. In my opinion it looks little better:

```python3
import threading

class Foo:
    def __init__(self):
        self.event1 = threading.Event()
        self.event2 = threading.Event()

    def first(self, printFirst: 'Callable[[], None]') -> None:
        printFirst()
        self.event1.set()

    def second(self, printSecond: 'Callable[[], None]') -> None:
        self.event1.wait()
        printSecond()
        self.event2.set()

    def third(self, printThird: 'Callable[[], None]') -> None:
        self.event2.wait()
        printThird()
```