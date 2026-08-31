# 💡Swift - Optimal Solution - Monotonic Stack

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5014950/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/5014950/)

---

# Solution
```swift
class Solution {
    func verifyPreorder(_ preorder: [Int]) -> Bool {
        var monoStack: [Int] = []
        var minValue = 0
        for num in preorder {
            while let last = monoStack.last, last < num {
                minValue = max(minValue, monoStack.removeLast())
            }
            if num < minValue { return false }
            monoStack.append(num)
        }
        return true
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(n)$$