# Solution with sort and heap

**Author:** drgavrikov
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5322437/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5322437/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

Let's consider how payment will be structured for a team of two or more people to understand the core idea of the solution.

Suppose we have two workers: the first one with a wage of $70$ and a quality of $10$, and the second one with a wage of $35$ and a quality of $5$. We'll calculate each worker's wage to quality ratio, which is wage/quality. The first worker's ratio will be $7$, and the second's will be $6$. According to the problem's condition, the wage to quality ratio of the team is equal to the maximum of its members, since each worker's pay must be directly proportional to their quality. Therefore, we must pay the second worker at least $35$ if he works together with the first worker who has a ratio of $7$. In the end, it will be $10 * 7 + 5 * 7 = 105$ or $(10 + 5) * 7 = 105$. Similarly, this will apply to a group of three, four, and so on workers.

In other words, to calculate the total cost of the team, we need to sum their qualities and multiply by the maximum ratio.

From the above explanation, it follows that to minimize the cost of a group of $k$ workers, we need to either decrease the maximum wage to quality ratio or the sum of the qualities. To do this, we'll create a list $wageToQualities$ with elements wage/quality and sort it in ascending order.

Then, using a heap, for each wage to quality ratio, we'll find $k$ workers with the minimum sum of qualities and with proportions less than or equal to the given boundary.

To achieve this, we can place the first $k$ elements of $wageToQualities$ into the heap and then update the value for each new worker. Finally, we'll select the minimum cost for k workers.

# Complexity
- Time complexity: $O(N \\log N + N \\log K)$ for sorting and store $K$ elements in heap
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N + K)$ additional memory for sorted list and heap space
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

Most of my solutions are in\xA0[C++](https://github.com/drgavrikov/leetcode-cpp)\xA0and\xA0[Kotlin](https://github.com/drgavrikov/leetcode-jvm)\xA0on my\xA0Github.


# Code
```
class Solution {
    fun mincostToHireWorkers(quality: IntArray, wage: IntArray, k: Int): Double {
        val wageToQualities = wage
            .zip(quality)
            .map { (workerWage, workerQuality) -> Pair(workerWage.toDouble() / workerQuality.toDouble(), workerQuality) }
            .sortedBy { it.first }

        var qualitySum = 0
        val heap = PriorityQueue<Int>(k, Collections.reverseOrder())
        wageToQualities.take(k).forEach { wageToQuality ->
            qualitySum += wageToQuality.second
            heap.add(wageToQuality.second)
        }

        var mincost = qualitySum * wageToQualities[k - 1].first
        wageToQualities.drop(k).forEach { wageToQuality ->
            qualitySum = qualitySum - heap.poll()!! + wageToQuality.second
            heap.add(wageToQuality.second)
            mincost = min(mincost, qualitySum * wageToQuality.first)
        }
        return mincost
    }
}

```