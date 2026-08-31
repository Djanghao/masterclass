# C++ unique_lock condition variable

**Author:** Syair
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-bounded-blocking-queue/solutions/418495/](https://leetcode.com/problems/design-bounded-blocking-queue/solutions/418495/)

---

```
class BoundedBlockingQueue {
  private:
    mutex mtx;
    condition_variable cv;
    int maxCap;
    queue<int> q;

  public:
    BoundedBlockingQueue(int capacity) : maxCap(capacity) {
    }

    void enqueue(int element) {
        {
            unique_lock<mutex> latch(mtx);
            cv.wait(latch, [=]() { return q.size() < maxCap; });
            q.push(element);
        }
        cv.notify_one();
    }

    int dequeue() {
        {
            unique_lock<mutex> latch(mtx);
            cv.wait(latch, [=]() { return q.size() > 0; });
            int back = q.front();
            q.pop();
        }
        cv.notify_one();
        return back;
    }
    int size() {
        lock_guard<mutex> latch(mtx);
        return q.size();
    }
};
```
