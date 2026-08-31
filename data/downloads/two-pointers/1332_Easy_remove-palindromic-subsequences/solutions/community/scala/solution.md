# Scala Super Concise Solution

**Author:** imran-sarwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/948021/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/948021/)

---

```
def removePalindromeSub(s: String): Int = s match {
	case s if s.isEmpty => 0
	case s if s == s.reverse => 1
	case _ => 2
}
```