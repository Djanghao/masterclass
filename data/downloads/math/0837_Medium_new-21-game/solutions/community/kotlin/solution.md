# Kotlin O(n) recursion with memoization

**Author:** darktale-nt
**Votes:** 0
**Link:** [https://leetcode.com/problems/new-21-game/solutions/3568335/](https://leetcode.com/problems/new-21-game/solutions/3568335/)

---

# Intuition
Probability of one outcome 
$p = 1/maxPts$
Probability of getting x value is sum of probabilities of getting one of [x-maxPts..x-1] value on previous step multiplied by p

# Approach
$$f(x) = p*\\sum_{n=lower_x}^{upper_x} f(n) $$
where $lower_x$ is maximum of $0$ and $x - maxPts$ 
and $upper_x$ is minimum of $k$ and $x-1$

$$f(x-1) = p*\\sum_{n=lower_{x-1}}^{upper_{x-1}} f(n) $$
where $lower_{x-1}$ is maximum of $0$ and $x - maxPts - 1$ 
and $upper_{x-1}$ is minimum of $k$ and $x - 2$
Generally $f(x) - f(x-1) = p*(\\sum_x - \\sum_{x-1})$ 
so $f(x) = p*(\\sum_x - \\sum_{x-1}) + f(x-1)$
$\\sum_x - \\sum_{x-1}$ intersects in middle elements, so difference is $\\delta_{upper} - \\delta_{lower}$
where $\\delta_{lower}$ is difference in upper bound of 2 sums. It could be 0 if $lower_x = lower_{x-1}$ or $f(x-maxPts-1)$ in other case
and $\\delta_{upper}$ if difference in lower bound of 2 sums. it also could be 0 if $upper_x = upper_{x-1}$ or $f(x-1)$ in other case

finally $f(x) = (\\delta_{upper} - \\delta_{lower}) * p + f(x-1)$
# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {

    fun new21Game(n: Int, k: Int, maxPts: Int): Double {
        if (k == 0) return 1.0
        val p = 1.0 / maxPts
        val dp = DoubleArray(n + 1) { -1.0 }.also {
            it[0] = 1.0
            it[1] = p
        }

        operator fun DoubleArray.invoke(x: Int): Double {
            if (dp[x] != -1.0) return dp[x]
            val lower = if (x >= maxPts + 1) dp(x - maxPts - 1) else 0.0
            val higher = if (k > x - 1) dp(x - 1) else 0.0
            dp[x] = (higher - lower) * p + dp(x - 1)
            return dp[x]
        }

        var result = 0.0
        for (x in k..minOf(n, k + maxPts)) {
            result += dp(x)
        }
        return result
    }
}
```