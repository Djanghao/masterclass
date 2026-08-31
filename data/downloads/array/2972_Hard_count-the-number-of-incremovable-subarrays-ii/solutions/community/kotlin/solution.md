# :: Kotlin ::

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4731566/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4731566/)

---

# Intuition
Split array to sorted lists.
One starts from left while other starts from right.

# Approach
Split array to sorted lists.
One starts from left while other starts from right.
Iterate through the list on the right and add the number on the left that is less than each item.

# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun incremovableSubarrayCount(nums: IntArray): Long {
        val left = mutableListOf<Int>()
        val right = mutableListOf<Int>()
        val n = nums.size

        var prev = 0
        for (i in 0 until n) {
            if (nums[i] <= prev) break
            left.add(nums[i])
            prev = nums[i]
        }

        var post = Int.MAX_VALUE
        for (i in n - 1 downTo 0) {
            if (nums[i] >= post) break
            right.add(nums[i])
            post = nums[i]
        }
        right.reverse()
        // left.forEach{ print("$it ")}
        // println()
        // right.forEach{ print("$it ")}
        // println()
        if (left.size == n) return n.toLong() * (n.toLong() + 1L) / 2L

        val l = left.size
        val r = right.size
        var result = 1L

        result += l.toLong()
        result += r.toLong()

        for (i in 0 until r) {
            val target = right[i]

            var lo = 0
            var hi = minOf(n - r + i, left.size)
            // println("$lo - $hi")
            while(lo < hi) {
                val mid = lo + (hi - lo) / 2

                if (left[mid] < target) {
                    lo = mid + 1
                } else {
                    hi = mid
                }
            }

            // println("lo = $lo")
            if (lo != 0)  result += lo.toLong()
        }

        return result
    }
}
```