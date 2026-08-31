# [Java] Queue O(1) 100%

**Author:** elulcao
**Votes:** 7
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/836457/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/836457/)

---

Time execution can be reduced avoiding a `for-loop` to add the new value inseted. The trick is to add the value each time it is inserted into the `queue`, if the size is reached then substrack the current value in que `queue` before next addition.


```java
class MovingAverage {
    int size;
    double sum;
    Queue<Integer> queue;

    /** Initialize your data structure here. */
    public MovingAverage(int size) {
        this.queue = new LinkedList<Integer>();
        this.size  = size;
        this.sum   = 0;
    }

    public double next(int val) {
        if (this.queue.size() == this.size) this.sum -= this.queue.poll();

        this.sum += val;
        this.queue.add(val);
        return this.sum / this.queue.size();
    }
}
```