# Scala Easy 1 liner

**Author:** Sunayna-Ray
**Votes:** 2
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1675308/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1675308/)

---

```
object Solution {
    def finalValueAfterOperations(operations: Array[String]): Int = {
        2*operations.count(_.contains("+"))-operations.length
        
    }
}
```