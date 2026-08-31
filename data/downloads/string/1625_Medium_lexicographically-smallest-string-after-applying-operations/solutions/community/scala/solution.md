# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/5141435/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/5141435/)

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
```
object Solution {
    def findLexSmallestString(s: String, a: Int, b: Int): String = {
    val n = s.size
    val b1 = b % n

    def bfs(queue: List[String], seen: Set[String], smallest: String): String = queue match {
        case Nil => smallest
        case s :: rest if seen.contains(s) => bfs(rest, seen, smallest)
        case s :: rest =>
        val newSmallest = if (s < smallest) s else smallest
        val ca = s.toCharArray
        for (i <- 1 until n by 2) {
            ca(i) = ((ca(i) - '0' + a) % 10 + '0').toChar
        }
        val newQueue = s.substring(b1) + s.substring(0, b1) :: ca.mkString :: rest
        bfs(newQueue, seen + s, newSmallest)
    }

    bfs(List(s), Set.empty, s)
    }

}
```