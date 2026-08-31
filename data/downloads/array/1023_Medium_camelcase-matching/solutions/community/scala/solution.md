# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/5076308/](https://leetcode.com/problems/camelcase-matching/solutions/5076308/)

---

```
object Solution {
  def camelMatch(queries: Array[String], pattern: String): List[Boolean] =
    def _match(s1: Seq[Char], s2: Seq[Char]): Boolean =
      lazy var ((h1,t1),(h2,t2)) = (s1.headOption -> s1.drop(1)) -> (s2.headOption,s2.drop(1))
      (h1,h2) match {
        case (None, _)                    => s2.isEmpty
        case (_, _)        if h1==h2      => _match(t1,t2)
        case (Some(c1), _) if c1.isUpper  => false
        case _                            => _match(t1,s2)
      }
    queries.map{q => _match(q,pattern)}.to(List)
}
```