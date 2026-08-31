# ✅ 0(1) Efficient Solution

**Author:** eleev
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5517606/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5517606/)

---

# Code
```swift
struct Solution {
    @_optimize(speed)
    func minChanges(_ n: Int, _ k: Int) -> Int {
        k & ~n == 0 ? n.nonzeroBitCount - k.nonzeroBitCount : -1
    }
}
```