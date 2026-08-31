# Scala

**Author:** dedmonds
**Votes:** 3
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/2678481/](https://leetcode.com/problems/smallest-even-multiple/solutions/2678481/)

---

```
object Solution {
    def smallestEvenMultiple(n: Int): Int = n & 1 match {
        case 0 => n
        case 1 => n << 1
    }
}
```