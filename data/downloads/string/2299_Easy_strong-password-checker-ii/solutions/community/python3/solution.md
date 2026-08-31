# [Java/Python 3] 2 codes w/ brief explanation and analysis.

**Author:** rock
**Votes:** 36
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/2138969/](https://leetcode.com/problems/strong-password-checker-ii/solutions/2138969/)

---

**Method 1: Use HashSet to count conditions**

**Q & A**

Q: Does the `HashSet` in the codes really cost space `O(1)`?
A: Java `HashSet` is implemented on `HashMap`, which has an initial size of `16`. The size will not increase since the load factor `4 / 16 < 0.75`. Generally speaking, space `O(16) = O(1)`. 

If you really wanted to optimize space, which is not really needed here, you could call `new HashSet<>(4, 1)`, here `4` and `1` are initial size and load factor respectively. -- credit to **@Ricola**.

**End of Q & A**

----

Use `s`, `l`, `u`, and `d` to indicate special characters, lower case, upper case and digits respectively; Put the characters into a `HashSet` to count the conditions met.

```java
    public boolean strongPasswordCheckerII(String password) {
        Set<Character> seen = new HashSet<>();
        for (int i = 0; i < password.length(); ++i) {
            char c = password.charAt(i);
            if (i > 0 && c == password.charAt(i - 1)) {
                return false;
            }
            if (Character.isLowerCase(c)) {
                seen.add('l');
            }else if (Character.isUpperCase(c)) {
                seen.add('u');
            }else if (Character.isDigit(c)) {
                seen.add('d');
            }else {
                seen.add('s');
            }
        }
        return password.length() >= 8 && seen.size() == 4;
    }
```
```python
    def strongPasswordCheckerII(self, password: str) -> bool:
        seen = set()
        for i, c in enumerate(password):
            if i > 0 and c == password[i - 1]:
                return False
            if c.isupper():
                seen.add('u')
            elif c.islower():
                seen.add('l')
            elif c.isdigit():
                seen.add('d')             
            else:
                seen.add('s')
        return  len(password) > 7 and len(seen) == 4
```

----

**Method 2: 6 passes**

```java
    public boolean strongPasswordCheckerII(String password) {
        for (int i = 1; i < password.length(); ++i) {
            if (password.charAt(i - 1) == password.charAt(i)) {
                return false;
            }
        }
        return password.chars().anyMatch(i -> "!@#$%^&*()-+".contains("" + (char)i)) && 
                password.chars().anyMatch(i -> Character.isDigit((char)i)) &&
                password.chars().anyMatch(i -> Character.isLowerCase((char)i)) && 
                password.chars().anyMatch(i -> Character.isUpperCase((char)i)) && 
                password.length() > 7;
    }
```
Credit to **@SunnyvaleCA** for the following Python 3 code:
```python
    def strongPasswordCheckerII(self, password: str) -> bool:
        return  any(c.isdigit() for c in password) and \\
                any(c.islower() for c in password) and \\
                any(c.isupper() for c in password) and \\
                any(c in '!@#$%^&*()-+' for c in password) and \\
                all(a != b for a, b in pairwise(password)) and \\
                len(password) > 7
```

**Analysis:**

Time: `O(n)`, space: `O(1)`, where `n = password.length()`.