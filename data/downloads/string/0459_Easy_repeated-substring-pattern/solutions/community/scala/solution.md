# scala oneliner

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/repeated-substring-pattern/solutions/3206694/](https://leetcode.com/problems/repeated-substring-pattern/solutions/3206694/)

---

# Code
```
object Solution {
  def repeatedSubstringPattern(s: String): Boolean =
    (1 to (s.size/2)).filter(n => s.size%n == 0).exists{n => 
      s.sliding(n,n).forall{it => (it zip s).forall{case (a,b) => a == b}}
    }
}
```