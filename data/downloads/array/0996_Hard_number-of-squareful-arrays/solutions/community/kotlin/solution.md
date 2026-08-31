# Kotlin dfs + bit manipulation

**Author:** Atrilos
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/5093286/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/5093286/)

---

# Code
```
class Solution {
    private var full = 0

    fun numSquarefulPerms(nums: IntArray): Int {
        full = (1 shl nums.size) - 1
        var res = 0
        val seen = mutableSetOf<String>()

        for ((i, num) in nums.withIndex()) {
            res += backtrack(nums, 1 shl i, num, "$num", seen)
        }

        return res
    }

    private fun backtrack(nums: IntArray, used: Int, last: Int, key: String, seen: MutableSet<String>): Int {
        if (key in seen) {
            return 0
        }
        if (used == full) {
            seen += key
            return 1
        }

        var count = 0

        for ((i, num) in nums.withIndex()) {
            val mask = used or (1 shl i)
            if (mask == used) continue
            if (isPerfectSquare(num + last)) {
                count += backtrack(nums, mask, num, key + "#${num}", seen)
            }
        }

        seen += key
        return count
    }

    private fun isPerfectSquare(num: Int): Boolean = ceil(sqrt(num.toDouble())) == floor(sqrt(num.toDouble()))
}
```