# Scala O(n) using Sliding window and a m,utable map

**Author:** 154pinkchairs
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/5059236/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/5059236/)

---

# Intuition
This solution uses a sliding window technique with two pointers (left, right), which is common for subarray problems.

# Approach
We visit each element in the array at most twice, once by the left and once by the right pointer. 

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
 $$O(n)$$

# Code
```
object Solution {
    def subarraysWithKDistinct(nums: Array[Int], k: Int): Int = {
        def atMostK(nums: Array[Int], k: Int): Int = {
            val count = scala.collection.mutable.Map[Int, Int]()
            var l = 0
            var res = 0
            for (r <- nums.indices) {
                count(nums(r)) = count.
                getOrElse(nums(r), 0) + 1
                while (count.size > k) {
                    count(nums(l)) -= 1
                    if (count(nums(l)) == 0) {
                        count.remove(nums(l))
                    }
                    l += 1
                 }
                 res += r - l + 1
            }
            res
        }
        atMostK(nums, k) - atMostK(nums, k - 1)
    }
}
```