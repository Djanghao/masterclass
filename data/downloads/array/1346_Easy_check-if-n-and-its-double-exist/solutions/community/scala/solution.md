# Simple functional solution (O(n) time and O(n) space)

**Author:** cachemiss
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/4112541/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/4112541/)

---

```
object Solution {
    def checkIfExist(arr: Array[Int]): Boolean = {
        val cache = arr.toSet
        lazy val zeroes = arr.count(_ == 0)
        arr.exists{i => if(i != 0) cache.contains(i * 2) else zeroes > 1}
    }
}
```