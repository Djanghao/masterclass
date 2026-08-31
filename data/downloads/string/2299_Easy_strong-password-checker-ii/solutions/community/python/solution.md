# Python | Easy Solution✅

**Author:** gmanayath
**Votes:** 8
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/2411304/](https://leetcode.com/problems/strong-password-checker-ii/solutions/2411304/)

---

```
def strongPasswordCheckerII(self, password: str) -> bool:
        if len(password) < 8:
            return False
        lowercase, uppercase, digit, special = False, False, False, False
        special_char = "!@#$%^&*()-+"
        for i in range(len(password)):
            if i != len(password)-1 and password[i] == password[i+1]: 
                # checking for same character in adjacent positions
                return False
            # not lowercase because we have to search for at least one lowercase letter only.
            if not lowercase: 
                lowercase = password[i].islower()
            if not uppercase:
                uppercase = password[i].isupper()
            if not digit:
                digit = password[i].isdigit()
            if not special:
                special = password[i] in special_char
        return lowercase and uppercase and digit and special
```