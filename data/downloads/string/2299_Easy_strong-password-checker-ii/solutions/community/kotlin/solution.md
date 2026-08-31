# [Kotlin] One Pass

**Author:** Pony1999
**Votes:** 2
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/2149079/](https://leetcode.com/problems/strong-password-checker-ii/solutions/2149079/)

---

```
class Solution {
    fun strongPasswordCheckerII(password: String): Boolean {
        if (password.length < 8) return false
        
        var lowerCase = password[0].isLowerCase()
        var upperCase = password[0].isUpperCase()
        var digit = password[0].isDigit()
        val specialChars = "!@#$%^&*()-+".toSet()
        var special = password[0] in specialChars
        var pre = password[0]
        
        for (c in password.substring(1)) {
            when {
                c == pre -> return false
                c.isLowerCase() -> lowerCase = true
                c.isUpperCase() -> upperCase = true
                c.isDigit() -> digit = true
                c in specialChars -> special = true
            }
            pre = c
        }
        return lowerCase && upperCase && digit && special
    }
}
```