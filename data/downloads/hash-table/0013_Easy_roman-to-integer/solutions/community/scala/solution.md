# Shortest (?) Scala recursive solution

**Author:** tylenol
**Votes:** 2
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/3548256/](https://leetcode.com/problems/roman-to-integer/solutions/3548256/)

---


# Approach

- Use two `Map`s for single-character and double-character digit Roman digits.
- Pattern match double-character digits first, then single-character digits.

# Complexity

- Time complexity: `O(n)`

- Space complexity: `O(n)` for stack space due to recursion.

  It's trivial to make it tail recursive to achieve `O(1)` but probably not worth it as the max input length is merely 15.

# Code
```
object Solution {
  val m1 = Map('I' -> 1, 'V' -> 5, 'X' -> 10, 'L' -> 50, 'C' -> 100, 'D' -> 500, 'M' -> 1000)
  val m2 = Map("IV" -> 4, "IX" -> 9, "XL" -> 40, "XC" -> 90, "CD" -> 400, "CM" -> 900)

  def romanToInt(s: String): Int = s match {
    case ""                          => 0
    case _ if m2.contains(s.take(2)) => romanToInt(s.drop(2)) + m2(s.take(2))
    case _                           => romanToInt(s.tail) + m1(s.head)
  }
}
```