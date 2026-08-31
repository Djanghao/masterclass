# C# Solution

**Author:** panaeimi
**Votes:** 1
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/3724320/](https://leetcode.com/problems/strong-password-checker-ii/solutions/3724320/)

---

# Code
```
public class Solution {
    public bool StrongPasswordCheckerII(string password) {
        if(password.Length < 8) return false;

        bool lc = false, uc = false, d = false, sc = false;
        char prev = ' ';
        foreach(char c in password) {
            if(!lc && char.IsLower(c)) {
               lc = true;    
            } else if(!uc && char.IsUpper(c)) {
               uc = true;
            } else if(prev != ' ' && prev == c) {
                return false;
            } else if(!d && char.IsDigit(c)) {
                d = true;
            } else if(!sc && "!@#$%^&*()-+".Contains(c)) {
                sc = true;
            } 
     
            prev = c;    
        }

        return lc && uc && d && sc; 
    }
}
```