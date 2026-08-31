# Equation Iteration

**Author:** mmedeiros
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5327427/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5327427/)

---

# Code
```python3 []
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        for a in range(int(math.sqrt(c)) + 1):
            b = math.sqrt(c - (a * a))
            if b == int(b): return True
        return False
```
```scala []
import scala.util.control.Breaks.{break, breakable}

object Solution {
    def judgeSquareSum(c: Int): Boolean =
        var result = false
        breakable {
            for a <- (0 until math.sqrt(c).toInt + 1) do
                val b = math.sqrt(c - (a * a))
                if (b % 1 == 0) then
                    result = true
                    break
        }
        result
}
```