# Swift | Stack

**Author:** pagafan7as
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5879994/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5879994/)

---

# Code
```swift []
class Solution {
    func minLength(_ s: String) -> Int {
        var stack = [Character]()
        for c in s {
            if let top = stack.last, 
               (top, c) == ("A", "B") || (top, c) == ("C", "D")
            {
                stack.removeLast()
            } else {
                stack.append(c)
            }
        }
        return stack.count
    }
}
```