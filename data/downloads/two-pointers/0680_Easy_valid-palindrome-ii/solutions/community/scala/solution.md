# scala recursion

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solutions/3213856/](https://leetcode.com/problems/valid-palindrome-ii/solutions/3213856/)

---

# Code
```
object Solution {
  def validPalindrome(s: String): Boolean = {
    def impl(as: Seq[Char], bs: Seq[Char], remLen: Int, remDiff: Int): Boolean = {
      // println(s"  impl($as, $bs, $remLen, $remDiff)")
      if(remDiff<0) false
      else if(remLen==0) true
      else if(as.head == bs.head) impl(as.tail, bs.tail, remLen-1, remDiff)
      else
        impl(as.tail, bs, remLen, remDiff-1) ||
        impl(as, bs.tail, remLen, remDiff-1)
    }
    impl(s.toList, s.reverse.toList, (s.length+1)/2, 1)
  }
}
```