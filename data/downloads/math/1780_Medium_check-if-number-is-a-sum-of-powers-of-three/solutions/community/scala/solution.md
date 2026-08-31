# Scala

**Author:** AbhinandShibu
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/1653759/](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/1653759/)

---

```
import scala.math.pow;
import scala.math.log;
import scala.math.floor;
import scala.math.round;
import scala.math.abs;
import scala.annotation.tailrec;

object Solution {
    @tailrec
    def checkPowersOfThree(n: Int): Boolean = {
        val exactExp: Double = log(n) / log(3)
        val exp: Int = exactExp match {
            case n if (abs(n - round(n)) < 0.000000000000001) => round(n).toInt;
            case _ => exactExp.floor.toInt;
        }
        
        val sumOf3Pows: Double = -0.5 * (1 - pow(3, exp + 1));
        println(exactExp, exp);
    
        n match {
            case n if n == 0          => true;
            case n if n == sumOf3Pows => true;
            case n if n < sumOf3Pows  => checkPowersOfThree(n - pow(3, exp).toInt);
            case _                    => false;
        }
    }
    
}
```