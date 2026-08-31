# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4451029/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4451029/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minOperations(_ s: String) -> Int {
        var firstOp = 0 // 101010101...
        var secondOp = 0 // 010101010...
        var firstStateOne = true
        for ch in s {
            if ch == "0" {
                if firstStateOne {
                    firstOp += 1
                } else {
                    secondOp += 1
                }
            } else {
                if firstStateOne {
                    secondOp += 1
                } else {
                    firstOp += 1
                }
            }
            firstStateOne.toggle()
        }
        return min(firstOp, secondOp)
    }
}
```