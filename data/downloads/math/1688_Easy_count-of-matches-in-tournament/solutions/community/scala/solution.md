# Scala Solution

**Author:** mhorskaya
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-matches-in-tournament/solutions/977817/](https://leetcode.com/problems/count-of-matches-in-tournament/solutions/977817/)

---

```
def numberOfMatches(n: Int): Int =
  if (n == 1) 0
  else if (n % 2 == 0) (n / 2) + numberOfMatches(n / 2)
  else (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1)
```