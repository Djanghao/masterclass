# 🟢🔴🟢 Beats 100.00%👏 RegExp || 4 Steps Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/5973821/](https://leetcode.com/problems/strong-password-checker-ii/solutions/5973821/)

---

```
class Solution {
    bool strongPasswordCheckerII(String password) {
        
        // Check for minimum length
        if (password.length < 8) return false;
        
        // Regular expressions for different criteria
        bool hasLowercase = RegExp(r'[a-z]').hasMatch(password);
        bool hasUppercase = RegExp(r'[A-Z]').hasMatch(password);
        bool hasDigit = RegExp(r'[0-9]').hasMatch(password);
        bool hasSpecialCharacter = RegExp(r'[!@#$%^&*()\\-\\+]').hasMatch(password);
        
        // Check for adjacent duplicates
        bool hasNoAdjacentDuplicates = !RegExp(r'(.)\\1').hasMatch(password);

        // Check all conditions
        return hasLowercase && hasUppercase && hasDigit && hasSpecialCharacter && hasNoAdjacentDuplicates;

    }
}
```