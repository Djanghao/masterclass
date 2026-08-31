# Scala functional programming solution

**Author:** minato_yukina
**Votes:** 2
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/1483332/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/1483332/)

---

```
object Solution {
    @scala.annotation.tailrec
    def tribonacci(n: Int, T0: Int = 0, T1: Int = 1, T2: Int = 1): Int =
        if (n > 0) tribonacci(n - 1, T1, T2, T0 + T1 + T2)
        else T0
}
```
Time complexity: O(N)
Space complexity: O(1) (because of tail-recursion)