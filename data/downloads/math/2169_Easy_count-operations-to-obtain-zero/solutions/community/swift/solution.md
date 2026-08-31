# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/2927782/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/2927782/)

---

```
class Solution {
    func countOperations(_ num1: Int, _ num2: Int, _ c: Int = 0) -> Int {
        guard num1 * num2 != 0 else { return c }
        return countOperations(max(num1, num2) - min(num1, num2), min(num1, num2), c + 1)
    }
}
```