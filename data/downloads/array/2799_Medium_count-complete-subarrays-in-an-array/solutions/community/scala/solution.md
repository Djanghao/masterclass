# Scala

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/5223769/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/5223769/)

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
    def countCompleteSubarrays(nums: Array[Int]): Int = {
        val length = nums.length
        val set = nums.toSet
        val totalDistinct = set.size
        var start = 0
        var end = 0
        var count = 0

        val map = scala.collection.mutable.Map[Int, Int]()

        while (end < length) {
            map(nums(end)) = map.getOrElse(nums(end), 0) + 1

            while (map.size == totalDistinct) {
                count += length - end
                map(nums(start)) = map(nums(start)) - 1
                if (map(nums(start)) == 0) {
                    map.remove(nums(start))
                }
                
                start += 1
            }

            end += 1
        }

        count
    }
}

```