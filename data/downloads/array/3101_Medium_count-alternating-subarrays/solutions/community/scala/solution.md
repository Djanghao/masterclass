# Scala two pointer stuff with recursion

**Author:** MaxPsm
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-alternating-subarrays/solutions/5703631/](https://leetcode.com/problems/count-alternating-subarrays/solutions/5703631/)

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
    def countAlternatingSubarrays(nums: Array[Int]): Long = {
    def go(currentSubArrayLength: Int, prevElem: Int, x: Int, y: Int, nums: Array[Int], count: Long): Long = {
       if (y == nums.length - 1) {
         if (nums(y) != prevElem) count + calculateSubArrays(currentSubArrayLength + 1)
         else if (currentSubArrayLength > 1) count + calculateSubArrays(currentSubArrayLength)
         else count
       }
       else (prevElem, y) match {
         case (p, ind) if nums(ind) != p => go(currentSubArrayLength + 1, nums(ind), x, y + 1, nums, count)
         case (p, ind) if nums(ind) == p => go(1, nums(ind), y, y + 1, nums, count + calculateSubArrays(currentSubArrayLength))
       }
    }

    def calculateSubArrays(length: Int): Long = length.toLong * (length.toLong - 1) / 2

    if (nums.length == 1) 1L
    else go(1, nums(0), 0, 1, nums, nums.length)
    
  }
}
```