# 💡Swift - Optimal Solution - Stack

**Author:** bernikovich
**Votes:** 3
**Link:** [https://leetcode.com/problems/make-the-string-great/solutions/4975574/](https://leetcode.com/problems/make-the-string-great/solutions/4975574/)

---

# Solution
```swift
class Solution {
    func makeGood(_ s: String) -> String {
        var stack: [Character] = []
        for char in s {
            if let last = stack.last, last != char && last.lowercased() == char.lowercased() {
                stack.popLast()
            } else {
                stack.append(char)
            }
        }
        return String(stack)
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(n)$$