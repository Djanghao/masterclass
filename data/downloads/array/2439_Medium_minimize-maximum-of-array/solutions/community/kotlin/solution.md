# [Kotlin] Binary Search EZ algo

**Author:** 4wl2d
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/3382560/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/3382560/)

---

# Intuition
I can solve it in brute, and try to think some other solves...

# Approach
first of all we need to add 'isValid' function, where we checking our condition. next we adding in main 'minimizeArrayValue' binary search algo, where we moving right border on isValid condition.

i did 3 tries before i get that we cant just use 'int', because in values where them exceed int range(int_max + 1), we need to use 'long'.
thats all i think. not actually hard

# Complexity
- Time complexity:
$$O(nlog(max))$$

- Space complexity:
$$O(max)$$(max in long range)

# Code
```
class Solution {
    fun minimizeArrayValue(nums: IntArray): Int {
        var left = 0L
        var right: Long? = nums.max()!!.toLong()
        while (left < right!!) {
            val mid: Long = left + (right - left).div(2)
            if (isValid(mid, nums)) {
                right = mid
            }
            else {
                left = mid + 1
            }
        }
        return right.toInt()
    }

    private fun isValid(target: Long, nums: IntArray): Boolean {
        if (nums[0] > target) { // \u043D\u0435\u043B\u044C\u0437\u044F \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C\u0430
            return false
        }
        var prev: Long = nums[0].toLong() // \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0448\u0438\u0439 \u0431\u0443\u0434\u0435\u0442 0(\u043D\u0430\u0447\u0438\u043D\u0430\u0435\u043C \u0441 \u0435\u0434\u0438\u043D\u0438\u0446\u044B)
        for (i in (1 until nums.size)) {
            val diff: Long = target - prev
            prev = nums[i].toLong() - diff
            if (prev > target) {
                return false
            }
        }
        return true
    }
}
```