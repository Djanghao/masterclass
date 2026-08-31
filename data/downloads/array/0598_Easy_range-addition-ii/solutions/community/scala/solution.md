# Scala 1-line solution

**Author:** minato_yukina
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/1435235/](https://leetcode.com/problems/range-addition-ii/solutions/1435235/)

---

```
object Solution {
    def maxCount(m: Int, n: Int, ops: Array[Array[Int]]): Int = {
        ops.foldLeft(Array(m, n))((op1, op2) => Array(Math.min(op1(0), op2(0)), Math.min(op1(1), op2(1)))).product
    }
}
```
Time complexity: O(N)
Space complexity: O(1)