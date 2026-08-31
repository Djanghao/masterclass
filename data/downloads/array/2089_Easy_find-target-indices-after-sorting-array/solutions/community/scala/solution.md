# ✅ Scala: binary search solutions (beats 100%/100%)

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/3436305/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/3436305/)

---

# Complexity
- Time complexity: $$O(n)$$ (if all elements == target)
- Space complexity: $$O(1)$$ (depends on sorting algorithm)

# Code
```scala
object Solution {
  def targetIndices(nums: Array[Int], target: Int): List[Int] = {
    import scala.collection.Searching
    
    nums.sortInPlace()

    nums.search(target) match {
      case Searching.Found(foundIndex) =>
        var end = foundIndex
        while (end < nums.length - 1 && nums(end + 1) == target) {
          end += 1
        }
        var res = List.empty[Int]
        while (end >= 0 && nums(end) == target) {
          res = end :: res
          end -= 1
        }
        res

      case Searching.InsertionPoint(_) => Nil
    }
  }
}
```