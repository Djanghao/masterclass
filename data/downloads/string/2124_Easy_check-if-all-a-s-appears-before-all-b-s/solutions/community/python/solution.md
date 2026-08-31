# Easy python solution 1 liner (Multiple approach)

**Author:** Vistrit
**Votes:** 21
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1661834/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/1661834/)

---

```
def checkString(self, s: str) -> bool:
        return (''.join(sorted(list(s))))==s
```

```
def checkString(self, s: str) -> bool:
        return "ba" not in s
```