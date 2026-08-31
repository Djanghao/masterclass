# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4948746/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4948746/)

---

```
object Solution {
  def minimumDeletions(word: String, k: Int): Int = {
    lazy val freqs = word.groupMapReduce(identity)(_ => 1)(_ + _).values.to(List)
    freqs.distinct.map{f => freqs.collect{
        case g if g<f => g
        case g if g-f > k => g-f-k 
      }.sum
    }.min
  }
}
```