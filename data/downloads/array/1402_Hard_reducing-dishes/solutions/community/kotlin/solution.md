# 🚀️🔥️ Kotlin - beats 100% explained brute force to O(1) space DP

**Author:** Klemo1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3356213/](https://leetcode.com/problems/reducing-dishes/solutions/3356213/)

---

# Intuition
Intuition is to start with a brute force solution. We know, that at given index i, we can either include it or don't.

Let's have another number j, which is our multiplier - it increases whenever we decide to include some satisfaction[i] and the gain is satisfaction[i]*j.

If we'll play around with it and have satisfactions shuffled, we'll notice that this only works if the array is somehow sorted.

# Complexity
- Time complexity:
$$O(2^n)$$ - we branch 2 times on each iteration

- Space complexity:
$$O(n)$$ - allocated in call stack

# Code
```
class Solution {
    private lateinit var satisfaction: IntArray

    fun maxSatisfaction(satisfaction: IntArray): Int {
        this.satisfaction = satisfaction
        satisfaction.sort()
        return dfs(0, 1)
    }

    private fun dfs(i: Int, j: Int): Int {
        if (i == satisfaction.size) return 0
        return maxOf(
            satisfaction[i] * j + dfs(i+1, j+1), // either include it
            dfs(i+1, j) // or don't
        )
    }
}
```
If we decide to print all calls of dfs, we'll notice it grows exponentially with the input. We also notice one thing: same i's and j's are computed over and over again.
We can solve this by memoization of already computed input at dfs(i,j).
If we'll submit brute force, it won't run in time limit, so we have to optimize to O(n) (not counting the sort which will increase complexity to O(nlogn)).

# Memoized DFS


# Complexity
- Time complexity:
$$O(n*log(n))$$ - the sort is now our bottleneck

- Space complexity:
$$O(n^2)$$ - increased capacity for memo, which is n x n matrix

# Code
```
class Solution {
    private lateinit var satisfaction: IntArray

    fun maxSatisfaction(satisfaction: IntArray): Int {
        this.satisfaction = satisfaction
        satisfaction.sort()
        return dfs(0, 1)
    }

    private fun dfs(i: Int, j: Int): Int {
        if (i == satisfaction.size) return 0
        return maxOf(
            satisfaction[i] * j + dfs(i+1, j+1), // either include it
            dfs(i+1, j) // or don't
        )
    }
}
```
This code is accepted by LC and beats 60% of solutions in time, but space complexity is very inefficient. We can do better, but we must do it with DP & tabulation.

# DP with tabulation V1

We'll just try to write similar approach we wrote recursively, but instead do it iteratively. This requires few changes and a little thinking.

Let's take this example:
our input is (sorted for simplicity):
`[-8,1,2,3]`

We want to have a table which is `int[n][2]` and `memo[i]` represents the pair of values: 
1. 0 - the maximum value possible with dish[i] included
2. 1 - the maximum value possible with dish[i] non-included

But how do we compute the contribution added by number at given i ? This is easy, since we are guaranteed to have included all the previous elements if we are to include this one, so it will be the prefix sum:

our prefix sum looks like this (it's reversed):
`[-2,6,5,3]`

our memo should then look like this:
`[12,14,8,3]`
`[14,8,3,0]`
We should return the max value of memo[0][0], memo[0][1]

We can notice that we don't even need the memo array. All we need to remember at index i is previous state from i+1, so we are alright with only 2 variables.

Oh, and we can also compute prefix sum on the fly while we are iterating, so that will be also O(1) and our algorithm will have constant space complexity.

# Code
```
class Solution {
    fun maxSatisfaction(satisfaction: IntArray): Int {
        satisfaction.sort()
        var maxIncluded = satisfaction[satisfaction.lastIndex]
        var maxNonIncluded = 0
        var prefixSum = maxIncluded

        for (i in satisfaction.size-2 downTo 0) {
            prefixSum += satisfaction[i]
            maxNonIncluded = maxOf(maxNonIncluded, maxIncluded)
            maxIncluded = maxNonIncluded + prefixSum
        }

        return maxOf(maxNonIncluded, maxIncluded)
    }
}
```

# DP with tabulation V2
There is still something ugly and unintuitive on iterating the array from end to start. Maybe we can make it prettier somehow.

What about if we sort it in descending order and iterate it from 1 to n-1 instead of from n-2 to 0.

That's pretty simple right?
If we do this, we may spot more room to optimize this, we don't even have to keep two variables for these maximums, because one is totally sufficient. We want to include all numbers up to som epoint in array and none others after them, so if we encounter a point which decreases our current maximum, we can break from the cycle and return directly.

```
class Solution {
    fun maxSatisfaction(satisfaction: IntArray): Int {
        satisfaction.sortDescending()
        var max = satisfaction[0]
        var prefixSum = max

        for (i in 1 until satisfaction.size) {
            prefixSum += satisfaction[i]
            if (max > max + prefixSum) break
            else max += prefixSum
        }

        return maxOf(0, max)
    }
}
```
This solution beats 100% in time & space.


---
\uD83D\uDC4D\uFE0F\uD83D\uDC4D\uFE0F If you like this solution or find it helpful, please upvote this post. \uD83D\uDC4D\uFE0F\uD83D\uDC4D\uFE0F
