# Kotlin DFS Solution

**Author:** quantiom
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/3363942/](https://leetcode.com/problems/closest-dessert-cost/solutions/3363942/)

---

# Intuition
At first, I tried to do this without recursion by sorting the list and adding the biggest toppings first, but I quickly realized that it wouldn't work. For this problem, you need to go through each combination of each topping. You can do that by using recursion with DFS.

# Approach
Basically, I loop through each base, and start recursion from there. Starting at topping index 0, it will recurisvely try every other topping including the current one for it being there 0 times, 1 time, and 2 times.

# Code
```
import kotlin.math.abs

class Solution {
    private var answer = Integer.MAX_VALUE

    fun closestCost(baseCosts: IntArray, toppingCosts: IntArray, target: Int): Int {
        baseCosts.forEach { dfs(target, it, toppingCosts, 0) }
        return answer
    }

    private fun dfs(target: Int, currentCost: Int, toppingCosts: IntArray, toppingIndex: Int) {
        if (currentCost == target) {
            answer = currentCost
            return
        }

        val delta = abs(target - currentCost)
        val answerDelta = abs(target - this.answer)

        if (delta < answerDelta || (delta == answerDelta && currentCost < this.answer)) {
            this.answer = currentCost
        }

        if (toppingIndex >= toppingCosts.size) return

        for (i in 0..2) {
            this.dfs(target, currentCost + (toppingCosts[toppingIndex] * i), toppingCosts, toppingIndex + 1)
        }
    }
}
```