# My Scala solution

**Author:** he11mean
**Votes:** 4
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/323136/](https://leetcode.com/problems/integer-to-roman/solutions/323136/)

---

```
object Solution {
    case class RomanNumber(decValue: Int, romanStr: String)
    val numbers = Seq(
            RomanNumber(1000, "M"),
            RomanNumber(900, "CM"),
            RomanNumber(500, "D"),
            RomanNumber(400, "CD"),
            RomanNumber(100, "C"),
            RomanNumber(90, "XC"),
            RomanNumber(50, "L"),
            RomanNumber(40, "XL"),
            RomanNumber(10, "X"),
            RomanNumber(9, "IX"),
            RomanNumber(5, "V"),
            RomanNumber(4, "IV"),
            RomanNumber(1, "I")
         )
    def intToRoman(num: Int): String = {
        def loop(num:Int, romans: Seq[RomanNumber]): String = {
            romans match {
                case RomanNumber(x, romanStr) :: _ if x < num => romanStr + loop(num-x, romans)
                case RomanNumber(x, romanStr) :: _ if x == num => romanStr
                case RomanNumber(x, _) :: tail if x > num => loop(num, tail)
            }
        }
        loop(num, numbers)
    }
}
```