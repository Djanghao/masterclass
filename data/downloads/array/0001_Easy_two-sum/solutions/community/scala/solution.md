# Scala immutable solution with recursion in O(n)

**Author:** dustin10
**Votes:** 15
**Link:** [https://leetcode.com/problems/two-sum/solutions/340563/](https://leetcode.com/problems/two-sum/solutions/340563/)

---

```
  object Solution {
    def twoSum(nums: Array[Int], target: Int): Array[Int] = {
      def twoSum(index: Int, previous: Map[Int, Int]): Array[Int] = {
        previous.get(target - nums(index)) match {
          case Some(previousIndex) => Array(previousIndex, index)
          case None => twoSum(index + 1, previous ++ Map(nums(index) -> index))
        }
      }
      twoSum(0, Map.empty)
    }
  }
```