# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/4308695/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/4308695/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def convertTime(current: String, correct: String): Int = {
      val cur = current.split(":").map(_.toInt)
      val cor = correct.split(":").map(_.toInt)

      val curMin = cur.head * 60 + cur.last
      val corMin = cor.head * 60 + cor.last

      val diff = if (curMin <= corMin) corMin - curMin else 1440 - curMin + corMin
      val ops = List(1, 5, 15, 60)
      
      def loop(diff: Int, ops: List[Int], acc: Int): Int =
        if (diff == 0) acc
        else loop(diff - ops.filter(_ <= diff).max, ops, acc + 1)

      loop(diff, ops, 0)
    }
}
```