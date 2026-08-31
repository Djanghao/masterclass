# ✅ Kotlin: two dynamic programming approaches [bottom-up beats 100% in runtime and memory]

**Author:** v-perfilev
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-fence/solutions/4248937/](https://leetcode.com/problems/paint-fence/solutions/4248937/)

---

# Approach
Our Kotlin solution defines a **WayCounter** interface with a **numWays** method, implemented by **TopDownWayCounter** and **BottomUpWayCounter**. Each class represents a dynamic programming strategy:

**Top-Down Way Counter:** Uses recursion with memoization to compute the number of ways from the first post to the end. We store the results of subproblems to avoid redundant calculations.

**Bottom-Up Way Counter:** Employs two variables to keep track of the previous two values needed for the current calculation, thereby reducing the space complexity of the solution. This iterative approach starts from the base cases and works up to the nth post.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ for both approaches.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ for Top-Down, $$O(1)$$ for Optimized Bottom-Up.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun numWays(n: Int, k: Int): Int {
        val topDownRes = TopDownWayCounter().numWays(n, k)
        println("Top down: $topDownRes")
        val bottomDownRes = BottomUpWayCounter().numWays(n, k)
        println("Bottom up: $bottomDownRes")
        return bottomDownRes
    }

    companion object {
        interface WayCounter {
            fun numWays(n: Int, k: Int): Int
        }

        /*
        TOP-DOWN
         */

        class TopDownWayCounter : WayCounter {
            private lateinit var memo: IntArray
            private var n = 0
            private var k = 0

            override fun numWays(n: Int, k: Int): Int {
                this.memo = IntArray(n)
                this.n = n
                this.k = k
                return dp(0)
            }

            private fun dp(i: Int): Int {
                if (i == this.n - 1) return this.k
                if (i == this.n - 2) return this.k * this.k
                if (this.memo[i] == 0) {
                    this.memo[i] = (this.k - 1) * (dp(i + 1) + dp(i + 2))
                }
                return this.memo[i]
            }
        }

        /*
        BOTTOM-UP
         */

        class BottomUpWayCounter : WayCounter {
            override fun numWays(n: Int, k: Int): Int {
                if (n == 1) return k
                if (n == 2) return k * k
                var prev2 = k
                var prev1 = k * k
                for (i in 2..<n) {
                    var tmp = prev1
                    prev1 = (k - 1) * (prev1 + prev2)
                    prev2 = tmp
                }
                return prev1
            }
        }
    }
}
```