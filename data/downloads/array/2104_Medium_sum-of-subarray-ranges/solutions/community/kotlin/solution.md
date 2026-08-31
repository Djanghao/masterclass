# [Kotlin] O(n) Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1625013/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1625013/)

---

```
class Solution {
    fun subArrayRanges(nums: IntArray): Long = sumOf(nums, Target.LARGEST) - sumOf(nums, Target.SMALLEST)

    private fun sumOf(nums: IntArray, target: Target): Long {
        var res = 0L
        val stack = Stack<Pair<Int, Int>>().apply { push(target.extremeValue to -1) } //num, index
        fun popAt(index: Int) = stack.pop().let { (popNum, popIndex) ->
            res += popNum.toLong() * (popIndex - stack.peek().second) * (index - popIndex)
        }
        nums.forEachIndexed { index, num ->
            while (target.moreExtremeOf(num, stack.peek().first) == num) {
                popAt(index)
            }
            stack.push(num to index)
        }
        while (stack.size > 1) {
            popAt(nums.size)
        }
        return res
    }

    private enum class Target(val extremeValue: Int) {
        LARGEST(Int.MAX_VALUE) {
            override fun moreExtremeOf(a: Int, b: Int): Int {
                return maxOf(a, b)
            }
        },
        SMALLEST(Int.MIN_VALUE) {
            override fun moreExtremeOf(a: Int, b: Int): Int {
                return minOf(a, b)
            }
        };

        abstract fun moreExtremeOf(a: Int, b: Int): Int
    }
}
```