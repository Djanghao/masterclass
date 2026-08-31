# Beats 100 % runtime , memory in scala

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/naming-a-company/solutions/5428378/](https://leetcode.com/problems/naming-a-company/solutions/5428378/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(mn) where m is size of ideas and n is length of each word
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(mn)
# Code
```
object Solution {
  def distinctNames(ideas: Array[String]): Long = {
    val array: Array[Set[String]] = Array.fill(26)(Set.empty)
    ideas.groupMapReduce(_.head)(y => Set(y.tail))((a, b) => a ++ b).foreach { x =>
      val idx: Int = x._1 - 'a'
      array.update(idx, x._2)
    }
    (0 until 26).flatMap { i =>
      (i + 1 until 26).map { j =>
        val matchingSuffix = array(i).intersect(array(j)).size
        val ans: Long = 2 * (array(i).size - matchingSuffix) * (array(j).size - matchingSuffix)
        ans
      }
    }.sum
  }

}
```