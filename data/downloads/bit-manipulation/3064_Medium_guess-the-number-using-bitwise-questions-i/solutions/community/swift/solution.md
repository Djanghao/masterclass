# ✅ O(1) | Bit check Solution

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4860794/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4860794/)

---

# Solution
```swift
/** 
 * Definition of commonSetBits API (defined in the parent class Problem)
 * func commonSetBits(_ num: Int) -> Int 
 */

final class Solution : Problem {
    @_optimize(speed)
    func findNumber() -> Int {
        (0...30).filter { commonSetBits(1 << $0 ) == 1 }
                .reduce(0) { $0 | 1 << $1 }
    }
}
```