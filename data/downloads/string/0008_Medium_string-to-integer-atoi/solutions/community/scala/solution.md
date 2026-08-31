# Scala, Pure FP, @tailrec

**Author:** dev-and
**Votes:** 3
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/275394/](https://leetcode.com/problems/string-to-integer-atoi/solutions/275394/)

---

```
  def myAtoi(str: String): Int = {
	@tailrec
    def inner(remain: List[Char], num: Int, sign: Option[Char]): Int =
      remain match {
        case ' ' :: rest if sign.isEmpty => inner(rest, num, sign)
        case '-' :: rest if sign.isEmpty => inner(rest, num, Some('-'))
        case '+' :: rest if sign.isEmpty => inner(rest, num, Some('+'))
        case char :: rest if char >= '0' && char <= '9' =>
          val units = char - '0'
          if (sign.contains('+') && (num == Int.MaxValue / 10 && units > 7 || num > Int.MaxValue / 10)) Int.MaxValue
          else if (sign.contains('-') && (num == Int.MaxValue / 10 && units > 8 || num > Int.MaxValue / 10)) Int.MinValue
          else inner(rest, num * 10 + units, sign.orElse(Some('+')))
        case _ => if (sign.contains('-')) -num else num
      }

    inner(str.toList, 0, None)
  }
```