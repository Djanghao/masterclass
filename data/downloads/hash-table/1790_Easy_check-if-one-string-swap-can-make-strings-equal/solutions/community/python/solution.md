# Python | Easy Solution✅

**Author:** gmanayath
**Votes:** 42
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/2482971/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/2482971/)

---

```
def areAlmostEqual(self, s1: str, s2: str) -> bool:
        if s1 == s2:
            return True  # if strings are equal then swaping is not required
        if sorted(s1) != sorted(s2):
            return False    # if sorted s1 and s2 are not equal then swaping will not make strings equal
        
        count = 0
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                count +=1  
        if count != 2: # the count should be 2, then only we can do at most one string swap
            return False
        
        return True
```