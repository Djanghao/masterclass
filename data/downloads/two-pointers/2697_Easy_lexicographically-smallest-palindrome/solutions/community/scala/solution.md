# Scala Tail Rec solution | Beats 100%

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/4266226/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/4266226/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.annotation.tailrec

object Solution extends App {
    //https://leetcode.com/problems/lexicographically-smallest-palindrome/
  def makeSmallestPalindrome(s: String): String = {

    @tailrec
    def helper(word: String, start: String, end: String): (String, String) = {
      if (word.isEmpty) (start, end)
      else if (word.length == 1) (start + word.head, end)
      else {
        if (word.head < word.last) 
        helper(word.tail.init, start + word.head, end + word.head)
        else if (word.head > word.last) 
        helper(word.tail.init, start + word.last, end + word.last)
        else {
          if (word.tail.head < word.init.last) 
          helper(word.tail.init, start + word.head, end + word.head)
          else helper(word.tail.init, start + word.last, end + word.last)
        }
      }
    }

    val li = helper(s, "", "")

    li._1 + li._2.reverse
  }

  //println(makeSmallestPalindrome("egcfe"))
}

```