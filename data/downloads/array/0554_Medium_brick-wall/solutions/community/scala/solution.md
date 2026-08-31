# beats 100% runtime and memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/brick-wall/solutions/5237923/](https://leetcode.com/problems/brick-wall/solutions/5237923/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
construct positions using brick length, the one position where maximum rows are ending (meaning that's the edge for max) is the solution, since problem is asking for cuts , total rows - max edges 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(n)
# Code
```
object Solution {
  def leastBricks(wall: List[List[Int]]): Int = {
    val positions = wall.map { eachWall =>
      eachWall.scanLeft(0)((sum, num) => sum + num).tail.dropRight(1)
    }.flatten
    val map = positions.groupMapReduce(x => x)(y => 1)((sum, count) => sum + count)
    val max=if(map.values.isEmpty)0 else map.values.max
    wall.length - max
  }
}
```