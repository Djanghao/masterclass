# Swift easy to understand solution

**Author:** evkobak
**Votes:** 1
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/2150659/](https://leetcode.com/problems/strong-password-checker-ii/solutions/2150659/)

---

```
class Solution {
    func strongPasswordCheckerII(_ password: String) -> Bool {
        
        guard password.count >= 8 else { return false }

        var uppercased = false
        var lowercased = false
        var number = false
        var special = false
        var prevChar: Character = "_"

        for char in password {
            if char.isUppercase { uppercased = true }
            if char.isLowercase { lowercased = true }
            if char.isNumber { number = true }
            if "!@#$%^&*()-+".contains(char) { special = true }
            if prevChar == char { return false }
            prevChar = char
        }

        return ![uppercased,lowercased,number,special].contains(false)
    }
}
```