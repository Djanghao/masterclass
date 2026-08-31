# Functional approach in scala

**Author:** krd4
**Votes:** 1
**Link:** [https://leetcode.com/problems/daily-temperatures/solutions/2923302/](https://leetcode.com/problems/daily-temperatures/solutions/2923302/)

---

# Intuition
Scanning from left to right can be perplex, instead from right to left with stack approach can simplify the solution siginificantly, I think.

# Approach
Using list as queue or stack, and recuresion to make code functinoal and look pretty good

# Code
```
import scala.annotation.tailrec

object Solution {
    def dailyTemperatures(temperatures: Array[Int]): Array[Int] = {
        @tailrec
        def loop(i: Int, queue: List[Int], outputs: List[Int]): List[Int] = {
            if (i < 0) outputs
            else if (queue == Nil) loop(i - 1, i :: queue, 0 :: outputs)
            else if (temperatures(i) < temperatures(queue.head)) loop(i - 1, i :: queue, queue.head - i :: outputs)
            else loop(i, queue.tail, outputs)
        }
        loop(temperatures.size - 1, List(), List()).toArray
    }
}
```