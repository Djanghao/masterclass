# Kotlin, Monotonic Deque + Sliding Window

**Author:** ramilsarbaev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/3999013/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/3999013/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun maximumRobots(chargeTimes: IntArray, runningCosts: IntArray, budget: Long): Int {
        val deque = ArrayDeque<Int>()
        var answer = 0
        var runningSum = 0L
        
        var left = 0
        for (right in chargeTimes.indices) {
            // keep stack monotonically decreasing
            while (deque.isNotEmpty() && deque.last() < chargeTimes[right]) {
                deque.removeLast()
            }

            deque.add(chargeTimes[right])
            runningSum += runningCosts[right]

            // if violates constraint, shrink the window
            while (deque.isNotEmpty() && deque.first() + (right - left + 1) * runningSum > budget) {
                if (chargeTimes[left] == deque.first()) deque.removeFirst()
                runningSum -= runningCosts[left]
                left++
            }

            answer = maxOf(answer, right - left + 1) 
        }

        return answer
    }
}
```