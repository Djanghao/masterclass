# ✅ Optimized Solution

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5226608/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5226608/)

---

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func numSteps(_ s: String) -> Int {
        let s = s.utf8CString.map(Int.init)
        var (carry, result) = (0, 0)
        
        for d in s[1...].reversed() {
            if (d + carry) & 1 == 0 {
                result += 1
            } else {
                result += 2
                carry = 1
            }
        }
        return result + carry - 1
    }
}
```