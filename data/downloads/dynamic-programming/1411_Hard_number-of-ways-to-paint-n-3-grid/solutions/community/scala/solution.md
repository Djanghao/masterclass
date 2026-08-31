# Easy Scala Optimal Solution With 100% Time And Space Optimisation .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/5297607/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/5297607/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    val mod: Int = 1000000007
    def numOfWays(n: Int): Int = {
        val state = scala.collection.mutable.ArrayBuffer[String]()
        for (i <- 0 until 3) {
            for (j <- 0 until 3 if i != j) {
                for (k <- 0 until 3 if j != k) {
                    state.append(s"$i$j$k")
                }
            }
        }
        val s = state.size
        if (n == 1) return s
        val adj = Array.fill(s)(scala.collection.mutable.ArrayBuffer[Int]())
        for (i <- 0 until s) {
            for (j <- 0 until s) {
                var compat = true
                for (k <- 0 until 3 if compat) {
                    if (state(i)(k) == state(j)(k)) {
                        compat = false
                    }
                }
                if (compat) adj(i).append(j)
            }
        }
        var dp = Array.fill(s)(1)
        for (_ <- 2 to n) {
            val dp_next = Array.fill(s)(0)
            for (i <- 0 until s) {
                for (x <- adj(i)) {
                    dp_next(i) = (dp_next(i) + dp(x)) % mod
                }
            }
            dp = dp_next
        }  
        var res = 0
        for (i <- 0 until s) {
            res = (res + dp(i)) % mod
        }   
        res
    }
}

```