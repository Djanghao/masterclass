# scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/4335788/](https://leetcode.com/problems/strobogrammatic-number/solutions/4335788/)

---

# Code
```
import scala.annotation.tailrec

object Solution {
    // Method to check if a numeric string is strobogrammatic.
    def isStrobogrammatic(num: String): Boolean = {
        // Maps digits to their rotated equivalents. ' ' represents non-strobogrammatic digits.
        val rotatedDigits: Array[String] =
            Array("0", "1", " ", " ", " ", " ", "9", " ", "8", "6")

        // Generates the rotated string by folding the original string from the right.
        val rotatedString = num.foldRight("") { (c, acc) =>
            // Appends the rotated digit of 'c' to the accumulated string 'acc'.
            acc.appended(rotatedDigits(c.asDigit).charAt(0))
        }

        // Checks if the rotated string is the same as the original number.
        rotatedString == num
    }
}

```