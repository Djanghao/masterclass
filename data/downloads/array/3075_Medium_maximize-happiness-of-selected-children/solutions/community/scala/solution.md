# Scala functional solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5135043/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5135043/)

---

# Code
```
object Solution {
    def maximumHappinessSum(happiness: Array[Int], k: Int): Long = {
        val sorted = happiness.sortBy(-_)

        sorted.view.scanLeft((0,k)){case ((_, rem), h) => 
            (math.max(0,h - (k - rem)), rem - 1)}.tail.takeWhile{_._2 >= 0}.map(_._1).foldLeft(0L)(_ + _.toLong)
    }
}
```