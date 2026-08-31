# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/1611503/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/1611503/)

---

```scala
object Solution {
  def checkPalindromeFormation(a: String, b: String): Boolean = {
    def matchLen(a: String, b: String) = (a zip b.reverse)
      .takeWhile{case (ch1,ch2) => ch1 == ch2}.size
    def isPalindrome(s:String):Boolean = s == s.reverse
    lazy val sz0 = a.size
    lazy val (ml1, ml2) = (matchLen(a,b), matchLen(b,a))
    Seq(
      b.take(sz0-ml1).drop(ml1),
      a.take(sz0-ml2).drop(ml2),
      a.take(sz0-ml1).drop(ml1),
      b.take(sz0-ml2).drop(ml2)
    ).exists(isPalindrome)
  }
}
```