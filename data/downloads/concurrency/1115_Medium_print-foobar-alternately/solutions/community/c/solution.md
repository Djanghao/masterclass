# C++ solution using mutex + CV (w/ explanation)

**Author:** sdk__
**Votes:** 21
**Link:** [https://leetcode.com/problems/print-foobar-alternately/solutions/949493/](https://leetcode.com/problems/print-foobar-alternately/solutions/949493/)

---

This is basically a semaphore. We use the flag `fooTurn` in the predicate of `wait()` to determine if the lock should be freed.

Because there are only two states (foo and bar), we can get away with using a boolean for the flag and `notify_one()`. If there were more states, we could scale this using an int flag and `notify_all()`.

If you're wondering why `foo` runs for the first time at all despite the `cv.wait()`, it's because the line is actually a shorthand for `while (!fooTurn) { cv.wait(lock); }`. Since `fooTurn` is initialized as true, the `cv.wait()` gets ignored.

```
class FooBar {
private:
    int n;
    std::mutex mtx;
    std::condition_variable cv;
    bool fooTurn = true;  // is it foo's turn to run?

public:
    FooBar(int n) {
        this->n = n;
    }

    void foo(function<void()> printFoo) {
        for (int i = 0; i < n; i++) {
            std::unique_lock<std::mutex> lock(mtx);
            cv.wait(lock, [this] { return fooTurn; });
			
        	printFoo();
			
            fooTurn = false;
            cv.notify_one();
        }
    }

    void bar(function<void()> printBar) {
        for (int i = 0; i < n; i++) {
            std::unique_lock<std::mutex> lock(mtx);
            cv.wait(lock, [this] { return !fooTurn; });
			
        	printBar();
			
            fooTurn = true;
            cv.notify_one();
        }
    }
};
```