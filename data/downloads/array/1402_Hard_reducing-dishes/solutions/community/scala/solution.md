# Scala | Greedy + Sorting + Prefix Sum

**Author:** ksoullpwk
**Votes:** 3
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3354361/](https://leetcode.com/problems/reducing-dishes/solutions/3354361/)

---

# Intuition
It always needs to take the highest dish to maximize satisfaction. So, we sort the score first. And then, the formula of score, which is sum of $$time[i] * sat[i]$$, can be break down to $$sat[i] + (sat[i] + sat[i-1]) + (sat[i] + sat[i-1] + sat[i-2])...$$. Since we have sorted the data, we can calculate prefix sum for it 2 times.

# Approach
1. Sort data from the highest to the lowest.
2. Calculate first prefix sum to find $$sat[i]$$, $$sat[i] + sat[i-1]$$, $$sat[i] + sat[i-1] + sat[i-2]$$ and so on.
3. Calculate second prefix sum to find $$sat[i]$$, $$sat[i] + (sat[i] + sat[i-1])$$, $$sat[i] + (sat[i] + sat[i-1]) + (sat[i] + sat[i-1] + sat[i-2])$$ and so on.
4. Find maximum of 3. (and need to add 0 in case no dishes are chosen).

# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```
object Solution {
    def maxSatisfaction(satisfaction: Array[Int]): Int = {
        val sortedSat = satisfaction.sortBy(-_)
        val pSum = sortedSat.scanLeft(0)(_ + _).tail
        val ppSum = pSum.scanLeft(0)(_ + _)
        ppSum.max
    }
}
```