# Simple solution in Swift.

**Author:** topuchi13
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/5273576/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/5273576/)

---


# Code
```
class Solution {
    func maximumScore(_ a: Int, _ b: Int, _ c: Int) -> Int {
    var sorted = [a, b, c].filter { $0 != 0 }.sorted()
    var count = 0

    while sorted.count > 1 {
        sorted[0] -= 1
        sorted[sorted.count - 1] -= 1
        count += 1
        sorted = sorted.filter { $0 != 0 }.sorted()
    }

    return count
    }
}
```