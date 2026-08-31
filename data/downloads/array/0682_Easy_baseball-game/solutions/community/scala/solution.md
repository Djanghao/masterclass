# Simple Scala foldRight

**Author:** sblackmon
**Votes:** 0
**Link:** [https://leetcode.com/problems/baseball-game/solutions/5896221/](https://leetcode.com/problems/baseball-game/solutions/5896221/)

---

# Intuition
Accumulate Array[Int] with foldLeft then sum

# Approach
Accumulate Array[Int] with foldLeft then sum

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```scala []
object Solution {
    def op : (Array[Int], String) => Array[Int] = {
      case (acc,"+") => acc :+ (acc.last + acc.init.last)
      case (acc,"D") => acc :+ (2*acc.last)
      case (acc,"C") => acc.init
      case (acc,score) => acc :+ score.toInt
    }
    def calPoints(operations: Array[String]): Int = {
        operations.foldLeft(Array[Int]())(op).sum
    }
}

```