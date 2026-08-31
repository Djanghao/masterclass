# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4995123/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4995123/)

---

```
object Solution {
  def minimumTimeToInitialState(word: String, k: Int): Int = {
    def impl(s1: Seq[Char], s2: Seq[Char], acc: Int=0): Int =
      if(s2.isEmpty) (acc + k-1) / k
      else if(s1.head != s2.head) 0
      else impl(s1.tail, s2.tail, acc+1)
    lazy val x1 = (k until word.size by k).map{off => impl(word, word.drop(off))}.max
    if(word.length <= k) 1 else (word.length + k-1) / k - x1
  }
}

```