# Go solution

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/2457562/](https://leetcode.com/problems/strong-password-checker-ii/solutions/2457562/)

---

```
func strongPasswordCheckerII(password string) bool {
    if len(password) < 8 {
        return false
    }
    
    hasLower, hasUpper, hasDigit, hasSpecial := false, false, false, false
    
    for i := 0; i < len(password); i++ {
        if i > 0 && password[i] == password[i-1] {
            return false
        }
        
        if password[i] >= 'a' && password[i] <= 'z' {
            hasLower = true
        }
        
        if password[i] >= 'A' && password[i] <= 'Z' {
            hasUpper = true
        }
        
        if password[i] >= '0' && password[i] <= '9' {
            hasDigit = true
        }
        
        if password[i] == '!' || password[i] == '@' || password[i] == '#' ||
        password[i] == '$' || password[i] == '%' || password[i] == '^' || password[i] == '&' || password[i] == '*' ||
        password[i] == '(' || password[i] == ')' || password[i] == '-' || password[i] == '+' {
            hasSpecial = true
        }
    }
    
    return hasLower && hasUpper && hasDigit && hasSpecial
}
```