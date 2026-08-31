# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4174623/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4174623/)

---

```scala
object Solution {
  def minOperations(s1: String, s2: String, x: Int): Int = {
    if (s1 == s2) return 0
    var p = List.empty[Int]
    s1.indices.foreach(i => if (s1.charAt(i) != s2.charAt(i)) p :+= i)
    if (p.size % 2 != 0) return -1
    var f0 = 0
    var f1 = x
    p.indices.drop(1).foreach(i => {
      val newF = (f1 + x).min(f0 + (p(i) - p(i - 1)) * 2)
      f0 = f1
      f1 = newF
    })
    f1 / 2
  }
}
```