# My Swift solution

**Author:** lmvtsv
**Votes:** 6
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2805032/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2805032/)

---

```
class Solution {
    func finalValueAfterOperations(_ operations: [String]) -> Int {
        var x = 0
        operations.forEach { x += $0.contains("+") ? 1 : -1 }
        return x
    }
}
```