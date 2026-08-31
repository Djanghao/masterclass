# SCALA | Functional style | tail recursive | pattern matching | Time complexity: O(n)

**Author:** Andrea_Detommaso
**Votes:** 5
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/2972092/](https://leetcode.com/problems/sliding-window-maximum/solutions/2972092/)

---

# Intuition

We use a monotonic decreasing deque, which implies that the first element is the maximum.
Once the maximum element is too far to stay in the window, we remove it, moving the maximum the to next largest element.
To maintain the decreasing order, we remove elements from the deque that are smaller than the elements being added.

---


# Implementation

## **queue match**:

- **case Nil**: The queue is empty, generate a queue with the current index *i*, proceed with the recursion over the next index *i+1*.
 - **case xs :+ x if nums(i) > nums(x) nums(i) > nums(x)**: Maintain monotonic decreasing, all elements in the queue smaller than the current one have no chance of being the maximum, so get rid of them.
 - **case x +: xs if x == i - k**:   *x* is the index of the maximum element. If *x + k == i*, then it is outside the window.
 -  **case _**: add the current index to the queue and its related value to the answers. Proceed with the recursion over the next index *i+1*.


# Note

- To make the code smoother, I apply the logic to the whole input array and remove the first *k - 1* solutions (i.e, the first window).
- Why vectors? Effective constant time for every operation.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.annotation.tailrec

object Solution {
  def maxSlidingWindow(nums: Array[Int], k: Int): Array[Int] = {

    @tailrec
    def loop(i: Int, queue: Vector[Int], answers: Vector[Int]): Vector[Int] =

      queue match {
        case _ if i + 1 > nums.length => answers
        case Nil  => loop(i + 1, queue :+ i, answers :+ nums(i))
        case xs :+ x if nums(i) > nums(x) => loop(i, xs, answers)
        case x +: xs if x == i - k => loop(i, xs, answers)
        case _ => loop(i + 1, queue :+ i, answers :+ nums(queue.head))
      }

    loop(0, Vector.empty[Int], Vector.empty[Int]).drop(k-1).toArray

  }
}
```