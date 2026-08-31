# [Scala] - easy O(n) solution

**Author:** myeyeswereclosed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4281771/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4281771/)

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
    def minimumRightShifts(nums: List[Int]): Int = {
        def findPivot(nums: List[Int]) = nums.indices.drop(1).find(i => nums(i) < nums(i-1))

        findPivot(nums) match {
            case None => 0
            case Some(index) => 
                findPivot(nums.drop(index) ::: nums.take(index))
                    .map(_ => -1)
                    .getOrElse(nums.length-index)
        }
    }
}
```