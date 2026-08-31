# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/3261583/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/3261583/)

---

# Code
```
object Solution {
  def largestMerge(word1: String, word2: String): String = {
    def lt(w1: Seq[Char], w2: Seq[Char]): Boolean = {
      if(w1.isEmpty) true
      else if(w2.isEmpty) false
      else if(w1.head == w2.head) lt(w1.tail,w2.tail)
      else (w1.head < w2.head)
    }
    def impl(w1: Seq[Char], w2: Seq[Char], acc: Seq[Char]): Seq[Char] = {
      lazy val (mx,mn) = if (lt(w1,w2)) (w2,w1) else (w1,w2)
      if(mn.isEmpty) (acc.reverse ++ mx)
      else impl(mx.tail, mn, mx.head +: acc)
    }
    impl(word1.toList, word2.toList, List()).mkString
  }
}
```