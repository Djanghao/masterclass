# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/2137187/](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/2137187/)

---

```

import scala.language.postfixOps
  def largestCombination(candidates: Array[Int]): Int = {
    candidates.foldLeft(Array.ofDim[Int](32))((acc, cur) =>{
      (cur.toBinaryString.reverse zipWithIndex).filter(_._1 == '1').map(n => acc.update(n._2, acc(n._2) + 1))
      acc
    }).max
  }
```