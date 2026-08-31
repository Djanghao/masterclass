# Simple Scala solution

**Author:** denisOgr
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/4440646/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/4440646/)

---

# Intuition
Use Double-end queue.

# Approach
**Solution #1. Using Deque.**
Store values in the queue with the size equal to the window size.
Add new element to the end of the queue. 
If size of queue more than window size, then remove values from the head.
Use data structure where append to end and removing from the head takes constant time.
Store count and sum for queueu for simplifing calucation avarage (avoid iterate over queue every time).

# Complexity
- Time complexity:
$$O(1)$$, equal window size, and it is constant and does not depends on the number of values.

- Space complexity:
$$O(1)$$, equal window size, and it is constant and does not depends on the number of values.

# Code
```
import scala.collection.mutable.ArrayDeque

class MovingAverage(_size: Int) {
    var count: Int = 0
    var sum: Int = 0
    var values: ArrayDeque[Int] = ArrayDeque()

    def next(`val`: Int): Double = {
        values.append(`val`)
        count += 1
        sum += `val`
        if(count > _size) {
            count -= 1
            sum -= values.head
            values = values.tail
        }
        sum*1.0 / count
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(`val`)
 */
```