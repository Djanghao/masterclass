# Scala solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/5045572/](https://leetcode.com/problems/reformat-the-string/solutions/5045572/)

---

# Approach
- Group alphabets and numeric
- Start with longer of the two lists of alphabets & numerics.

# Complexity
- Time complexity: $$O(n + n/2) $$
  n - iterate to group. 
  n/2 - merge the list. 


# Code
```
object Solution {
  def reformat(s: String): String = 
    val (chars, ints) = s.foldLeft(List.empty[Char], List.empty[Int]): (tuple, element) =>
      (tuple, element) match
        case ((chars, ints), element) if element.isDigit => (chars, element.asDigit +: ints)
        case ((chars, ints), element)                    => (element +: chars, ints)
    if math.abs(chars.length - ints.length) > 1 then ""
    else
      (if chars.length > ints.length then chars.zipAll(ints, ' ', ' ')
       else ints.zipAll(chars, ' ', ' '))
        .map(t => s"${t._1}${t._2}")
        .mkString.trim
}
```