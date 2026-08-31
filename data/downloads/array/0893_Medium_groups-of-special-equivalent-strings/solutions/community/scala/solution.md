# Simple Scala solution with Set

**Author:** MaxPsm
**Votes:** 0
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/5669840/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/5669840/)

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
```scala []
object Solution {
    def numSpecialEquivGroups(words: Array[String]): Int = {
    words.foldLeft((0, Set.empty[(String, String)])){ (acc, str) =>
      val even = str.zipWithIndex.collect {
        case (char, idx) if idx % 2 != 0 => char
      }.mkString.sorted
      val odd = str.zipWithIndex.collect {
        case (char, idx) if idx % 2 == 0 => char
      }.mkString.sorted

      if (!acc._2.contains(even, odd)) (acc._1 + 1, acc._2.+((even, odd)))
      else acc
    }._1
  }
}
```