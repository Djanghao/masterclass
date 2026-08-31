# [Kotlin] Monotonic Stack

**Author:** devle79
**Votes:** 6
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/2856865/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/2856865/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun sumSubarrayMins(arr: IntArray): Int {
        var minValue: Long = 0

        val stack = Stack<Int>()
        stack.push(-1)

        val module = 1e9.toLong() + 7

        for (i in 0 .. arr.size) {
            val currVal = if (i in arr.indices) arr[i] else 0

            while (stack.peek() != -1 && currVal < arr[stack.peek()]) {
                val index = stack.pop()

                val left = index - stack.peek()
                val right = i - index

                val add = (left * right * arr[index].toLong()) % module

                minValue += add
                minValue %= module
            }

            stack.push(i)
        }

        return minValue.toInt()
    }
}
```