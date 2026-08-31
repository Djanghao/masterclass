# Scala 1 liner with group by and counting

**Author:** kevincav
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/3689509/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/3689509/)

---

# Code
```
object Solution {
    def divideArray(nums: Array[Int]): Boolean = !nums.groupBy(a => a).values.exists(_.length % 2 != 0)
}
```