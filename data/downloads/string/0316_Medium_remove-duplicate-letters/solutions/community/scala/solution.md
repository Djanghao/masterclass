# Scala O(n)

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-duplicate-letters/solutions/757574/](https://leetcode.com/problems/remove-duplicate-letters/solutions/757574/)

---

```
object Solution {
  def removeDuplicateLetters(s: String): String = {
    s
      .foldLeft(s.groupMapReduce(identity)(_ => 1)(_ + _), List[Char](), Set[Char]()) {
        case (counts, list, set) -> char if set.contains(char) =>
          (counts + (char -> (counts(char) - 1)), list, set)

        case (counts, list, set) -> char => list.span(char1 => char1 > char && counts(char1) > 0) match {
          case (drop, keep) => (counts + (char -> (counts(char) - 1)), char +: keep, set -- drop + char)
        }
      }
      ._2
      .reverse
      .mkString
  }
}
```