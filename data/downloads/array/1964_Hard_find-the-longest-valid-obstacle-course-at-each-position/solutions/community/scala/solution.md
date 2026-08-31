# using binary search and fold left

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/6110756/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/6110756/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nLogn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```scala []
object Solution {
  def longestObstacleCourseAtEachPosition(obstacles: Array[Int]): Array[Int] = {
    obstacles.foldLeft(Array.empty[Int], Array.empty[Int]) {
      case ((result, list), num) =>
        val idx = getIdx(list, num, list.length)
        val updatedList = if (idx == list.length) list :+ num else {
          list(idx) = num
          list
        }
        (result :+ (idx + 1), updatedList)
    }._1
  }

  private def getIdx(list: Array[Int], target: Int, right: Int) = {
    def search(l: Int, r: Int): Int = {
      if (l >= r) r
      else {
        val mid = (l + r) / 2
        if (list(mid) <= target) search(mid+1, r)
        else search(l, mid)
      }
    }
    search(0, right)
  }
}
```