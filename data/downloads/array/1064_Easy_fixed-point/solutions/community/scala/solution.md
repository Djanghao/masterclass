# Scala solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/fixed-point/solutions/2783631/](https://leetcode.com/problems/fixed-point/solutions/2783631/)

---

```
object Solution {
    def fixedPoint(arr: Array[Int]): Int = {
        (0 until arr.length) foreach 
            {a => if ((arr indexOf a) == a) return a}
        -1
    }
}
```