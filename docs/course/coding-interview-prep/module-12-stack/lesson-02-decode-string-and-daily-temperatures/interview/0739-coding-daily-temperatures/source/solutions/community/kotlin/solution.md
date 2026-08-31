# [Kotlin] Simple Stack Solution

**Author:** devle79
**Votes:** 3
**Link:** [https://leetcode.com/problems/daily-temperatures/solutions/4652097/](https://leetcode.com/problems/daily-temperatures/solutions/4652097/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

Each elements in `result` array indicate next `warmer temperature` day.

So, we can solve this problem with a kind of greedy algorithm & stack.

Add each element(day) in stack.

If `stack top < today's temperature`, the next warmer day after the `day at the top of the stack` is `today`.

Else, you'll have to wait for warmer day.

Stack is guaranteed to always be sorted, so if there are days in the stack that were colder than today, they are all guaranteed to be calculated.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    fun dailyTemperatures(temperatures: IntArray): IntArray {
        val n = temperatures.size

        val answer = IntArray(n)

        val stack = Stack<Int>()
        stack.add(0)

        for (i in 1 until n) {
            val todayTemperature = temperatures[i]

            while (stack.isNotEmpty() && temperatures[stack.peek()] < todayTemperature) {
                val day = stack.pop()
                answer[day] = i - day
            }

            stack.add(i)
        }

        return answer
    }
}
```