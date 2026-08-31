# scala simple linear

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/2017235/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/2017235/)

---

The algorithm is based on an observation, that the removal of a digit increases the value of string if the digit is followed by a bigger digit and decreases if it's followed by a lower digit. So, to maximize the string we should either remove the FIRST digit that is followed by a bigger digit, or the LAST digit which isn't followed by a bigger digit.
```scala
def removeDigit(number: String, digit: Char): String = {
  def go(l: List[Char], acc: List[Char]): List[Char] =
    l match {
      case h1 :: h2 :: tail if h1 == digit & h1 < h2 => acc.reverse ::: h2 :: tail
      case Nil =>
        val (prepend, append) = acc.splitAt(acc.indexWhere(_ == digit))
        append.tail.reverse ::: prepend.reverse
      case h :: tail => go(tail, h :: acc)
    }

  new String(go(number.toList, List.empty).toArray) 
}
```