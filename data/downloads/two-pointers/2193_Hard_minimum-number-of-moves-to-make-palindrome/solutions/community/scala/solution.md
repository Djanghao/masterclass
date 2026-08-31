# scala greedy recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/5691034/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/5691034/)

---

```scala []
object Solution {
  def minMovesToMakePalindrome(s: String, acc: Int=0): Int = {
    lazy val x0 = s.zipWithIndex.toList
      .groupMapReduce(_._1)(x => List(x._2)){case (a,b) => List(a.head, b.last) }
      .values.maxBy(x => x.last - x.head)
    if(s == s.reverse) acc
    else minMovesToMakePalindrome(
      s.substring(0,x0.head) + s.substring(x0.head+1,x0.last) + s.substring(x0.last+1),
      acc+x0.head - 0 + s.length-1-x0.last
      )
  }
}
```