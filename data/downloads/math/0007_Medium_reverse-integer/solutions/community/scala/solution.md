# Scala EASY Solution

**Author:** LightYagami821
**Votes:** 7
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/4309937/](https://leetcode.com/problems/reverse-integer/solutions/4309937/)

---


# Code
```
object Solution {
    def reverse(x: Int): Int = {
        val s = if (x < 0) x.toString.tail else x.toString
        val d = s.reverse.toDouble * x.signum
        if  (d.isValidInt) d.toInt else 0
    }
}
```