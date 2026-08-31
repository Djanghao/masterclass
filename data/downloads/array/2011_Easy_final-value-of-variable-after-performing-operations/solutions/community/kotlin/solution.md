# [Kotlin] Clean & Short O(n) Solution

**Author:** catcatcute
**Votes:** 4
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1471955/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1471955/)

---

```
class Solution {
    fun finalValueAfterOperations(operations: Array<String>): Int {
        return operations.fold(0) { acc, s ->
            if (s[1] == '+') {
                acc + 1
            } else {
                acc - 1
            }
        }
    }
}
```