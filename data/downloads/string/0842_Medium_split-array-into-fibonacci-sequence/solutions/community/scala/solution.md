# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/2390143/](https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/2390143/)

---

```
import scala.collection.mutable.ListBuffer

def splitIntoFibonacci(S: String): List[Int] = S.length match {
    case len if (len <= 2) => List.empty
    case len => {
      val result = ListBuffer[Int]()
      if (split(0, 0, result, 0, S)) result.toList else List.empty
    }
  }

  def split(prev1: Long, prev2: Long, result: ListBuffer[Int], index: Int, S: String): Boolean = {
    if (index == S.length && result.length > 2) return true
    (index until S.length).foreach { i =>
      if (S.charAt(index) == '0' && i > index) return false
      val next = S.substring(index, i + 1).toLong
      if (next > Int.MaxValue.toLong) return false
      val len = result.length
      if (len < 2 || (prev1 + prev2 == next)) {
        result.append(next.toInt)
        if (split(prev2, next, result, i + 1, S)) return true
        result.remove(len)
      }
    }
    false
  }
```