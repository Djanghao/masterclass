# [scala] fp + recursion

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4288553/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4288553/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(v)$$, where:
    - *v* - number of vowels in input string

# Code
```scala
object Solution {
  def sortVowels(s: String): String = {
    val allVowels = "aeiouAEIOU".toSet
    val sortedVowels = s.filter(allVowels.contains).sorted

    @scala.annotation.tailrec
    def loop(i: Int, j: Int, acc: List[Char]): String =
      if (i == s.length)
        acc.reverse.mkString
      else
        s(i) match {
          case ch if allVowels.contains(ch) =>
            loop(i + 1, j + 1, sortedVowels(j) :: acc)
          case ch =>
            loop(i + 1, j, ch :: acc)
        }

    loop(i = 0, j = 0, acc = Nil)
  }
}
```