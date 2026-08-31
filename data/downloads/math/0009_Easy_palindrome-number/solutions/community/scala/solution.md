# Scala solutions (w/o string)

**Author:** simon_r
**Votes:** 6
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/1958061/](https://leetcode.com/problems/palindrome-number/solutions/1958061/)

---

## solution 1
```
object Solution {
  def isPalindrome(x: Int): Boolean =
    Option.when(x >= 0)(reverse(x, 0)).fold(false)(x == _)
  
  def reverse(input: Int, result: Int): Int =
      Option.when(input > 0)(reverse(input/10, result*10+input%10))
        .getOrElse(result)
}
```

## solution 2

```
import scala.annotation.tailrec

object Solution {
  def isPalindrome(x: Int): Boolean =
    Option.when(x >= 0)(reverse(x, 0)).fold(false)(x == _)

  @tailrec
  def reverse(input: Int, result: Int): Int =
    input match {
      case 0 => result
      case _ => reverse(input/10, result*10+input%10)
    }
}
```
