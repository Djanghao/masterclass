# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/5574793/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/5574793/)

---

```scala
object Solution {
  def canConstruct(s: String, k: Int): Boolean =
    s.length >= k && 
    s.groupMapReduce(identity)(_ => 1)(_ + _).iterator.count(_._2 % 2 == 1) <= k
}
```