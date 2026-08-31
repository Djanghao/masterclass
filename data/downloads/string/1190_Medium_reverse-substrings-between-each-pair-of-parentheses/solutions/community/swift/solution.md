# 🍥 Super simple, beats 100%

**Author:** amt93
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457806/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457806/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    func reverseParentheses(_ s: String) -> String {
        var chars = [Character]()
        var opens = [Int]()

        for char in s {
            if char == "(" {
                opens.append(chars.count)
            } else if char == ")" {
                chars[opens.removeLast()...].reverse()
            } else {
                chars.append(char)
            }
        }
        return String(chars)
    }
}
```