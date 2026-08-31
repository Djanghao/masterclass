# Scala ( fold )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/2760792/](https://leetcode.com/problems/armstrong-number/solutions/2760792/)

---

```
import scala.math.pow

object Solution {
    def isArmstrong(n: Int): Boolean = {
        val digs = n.toString
        
        (digs foldLeft 0.0) {(sum, c) =>
            sum + pow(c.toString.toDouble, digs.size)
         }
        .toInt == n
    }
}
```