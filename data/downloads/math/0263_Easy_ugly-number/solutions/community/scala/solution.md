# fast, recursion

**Author:** kabishev
**Votes:** 2
**Link:** [https://leetcode.com/problems/ugly-number/solutions/2826038/](https://leetcode.com/problems/ugly-number/solutions/2826038/)

---

# Code
```
object Solution {
    @scala.annotation.tailrec
    def isUgly(n: Int): Boolean =
        if (n == 0) false
        else if (n % 2 == 0) isUgly(n / 2)
        else if (n % 3 == 0) isUgly(n / 3)
        else if (n % 5 == 0) isUgly(n / 5)
        else n == 1
}
```