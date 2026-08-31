# Swift | Functional

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/5436626/](https://leetcode.com/problems/count-asterisks/solutions/5436626/)

---

Note the option ```omittingEmptySubsequences``` set to ```false```.

```
class Solution {
    func countAsterisks(_ s: String) -> Int {
        s.split(separator: "|", omittingEmptySubsequences: false)
            .enumerated()
            .filter { $0.0 % 2 == 0}
            .map { $0.1 }
            .joined()
            .filter { $0 == "*" }
            .count
    }
}
```