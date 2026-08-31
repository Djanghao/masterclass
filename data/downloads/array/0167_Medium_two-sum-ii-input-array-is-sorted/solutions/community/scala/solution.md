# Scala solution - Two Pointers Approach using Pattern Matching

**Author:** manu__24
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4080845/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4080845/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach: Two Pointers
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import scala.annotation.tailrec
object Solution {
      def twoSum(nums: Array[Int], target: Int): Array[Int] = {
        @tailrec
        def twoSumHelper(l: Int, r: Int): Array[Int] = (nums(l) + nums(r)) match {
            case `target` => Array(l + 1, r + 1)
            case sum if sum < target => twoSumHelper(l + 1, r)
            case sum if sum > target => twoSumHelper(l, r - 1)
        }
    twoSumHelper(0, nums.length - 1)
    }
}
```