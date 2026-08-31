# Simple solve with 'when' expression

**Author:** 4wl2d
**Votes:** 6
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/3292577/](https://leetcode.com/problems/search-insert-position/solutions/3292577/)

---

# Intuition
Hm.. Easy task on Binary search algo, why i thinkin so much? Just write algo and do some edits on it.

# Approach
I wrote binary search with when expression like in previous tasks.

# Complexity
- Time complexity:
$$O(logN)$$

- Space complexity:
idk maybe $$O(N)$$

# Code
```
class Solution {
    fun searchInsert(nums: IntArray, target: Int): Int {
        var l = 0
        var r = nums.size - 1
        while (l <= r) {
            var mid = (l + r) / 2
            when {
                target < nums[mid] -> r = mid - 1
                target > nums[mid] -> l = mid + 1
                target == nums[mid] -> return mid
            }
        }
        return l
    }
}
```