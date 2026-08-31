# python3: 40ms 86.64% Faster 100% Less memory, using threading.Lock

**Author:** sreejeet
**Votes:** 14
**Link:** [https://leetcode.com/problems/print-foobar-alternately/solutions/603570/](https://leetcode.com/problems/print-foobar-alternately/solutions/603570/)

---

```
from threading import Lock
class FooBar:
    def __init__(self, n):
        self.n = n
        self.foo_lock = Lock()
        self.bar_lock = Lock()
        self.bar_lock.acquire()


    def foo(self, printFoo: 'Callable[[], None]') -> None:
        for i in range(self.n):
            self.foo_lock.acquire()
            # printFoo() outputs "foo". Do not change or remove this line.
            printFoo()
            self.bar_lock.release()


    def bar(self, printBar: 'Callable[[], None]') -> None:
        for i in range(self.n):
            self.bar_lock.acquire()
            # printBar() outputs "bar". Do not change or remove this line.
            printBar()
            self.foo_lock.release()
```