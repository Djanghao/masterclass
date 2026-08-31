# ✅ O(1) Runtime & Space | Beats 100% Runtime

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/4740387/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/4740387/)

---

![Screenshot.png](./images/0.png)

# Solution
```swift
final class Solution {
    @_optimize(speed)
    func countNumbersWithUniqueDigits(_ n: Int) -> Int {
        guard n != 0 else { return 1 }
        guard n != 1 else { return 10 }
        var base = 9
        var result = 10
        var j = n - 1

        for i in (1...9).reversed() where j > 0 {
            base *= i
            result += base
            j -= 1
        }
        return result
    }
}
```