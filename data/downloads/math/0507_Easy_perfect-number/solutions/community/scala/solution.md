# Scala two line solution

**Author:** Zolafarre
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-number/solutions/4149350/](https://leetcode.com/problems/perfect-number/solutions/4149350/)

---


# Code
```
object Solution {
    def checkPerfectNumber(num: Int): Boolean = {
            var num1 = Array(0)
            (1 until num).foreach(x => if(num % x == 0) num1 :+= x); if(num1.sum==num) true else false
    }
}
```