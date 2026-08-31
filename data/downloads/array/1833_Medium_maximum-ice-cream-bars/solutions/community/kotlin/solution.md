# Priority Queue

**Author:** sunnydaydev
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3008381/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3008381/)

---

# Intuition
Intuition is the same as intuition of the [official Sorting(Greedy) solution](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/2885725/maximum-ice-cream-bars/). But, as we can see, the bottleneck of this solution is sorting.
Can we improve it? I think we can. We don't need to sort the entire `costs` array, it's enough to sort only "used" costs, and when total used cost becomes greater than the available `coins` remove the most expensive item.

# Approach
There is one very suitable data structure to complete the task, this is `PriorityQueue`. So let's use `PriorityQueue` with the `Comparator` that arranges costs from most expensive to cheapest.
We'll iterate over all items in `costs` array. On each step we'll add the cost to `queue` and `totalCost`. When `totalCost` becomes greater than `coins` we'll remove most expensive (first) cost from `queue` and `totalCost`.

# Complexity
- Time complexity: `O(n * log(r))`, where `r` is the result count, which is always less than or equeal to `n`
- Space complexity: `O(r)`

This solution is better than the official solution in cases when the result is significantly less than the input (`costs` size).

# Code
```
import java.util.*

class Solution {

    fun maxIceCream(costs: IntArray, coins: Int): Int {
        val queue = PriorityQueue<Int>(Comparator.reverseOrder())
        var totalCost = 0

        costs.forEach { cost ->
            queue.add(cost)
            totalCost += cost

            if (totalCost > coins) {
                totalCost -= queue.remove()
            }
        }

        return queue.size
    }
}
```