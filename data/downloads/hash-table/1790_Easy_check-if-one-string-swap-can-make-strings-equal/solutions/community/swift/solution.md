# Simple solution in Swift

**Author:** topuchi13
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/5273651/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/5273651/)

---


# Code
```
class Solution {
    func areAlmostEqual(_ s1: String, _ s2: String) -> Bool {
        let a = Array(s1)
        let b = Array(s2)
        var differentCount = 0
        
        var differentSetA = Set<Character>()
        var differentSetB = Set<Character>()

        for i in 0..<s1.count {
            let areDifferent = a[i] != b[i]
            if areDifferent {
                differentSetA.insert(a[i])
                differentSetB.insert(b[i])
            }
            differentCount += areDifferent ? 1 : 0
        }

        return differentSetA.subtracting(differentSetB).isEmpty && differentCount <= 2
    }
}
```