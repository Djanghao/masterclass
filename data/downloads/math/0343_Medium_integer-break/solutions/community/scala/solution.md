# Scala - memoization, easy to understand

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-break/solutions/5290897/](https://leetcode.com/problems/integer-break/solutions/5290897/)

---


```
object Solution {
    def integerBreak(n: Int): Int = {
        val memo = Array.fill(n + 1)(-1)
        
        def solve(n: Int): Int = {
            if (n == 1) return 1 
            
            if (memo(n) != -1) return memo(n) 
            
            var ans = 0
            for (i <- 1 until n) {
                val prod = i * (n - i max solve(n - i))
                ans = ans max prod
            }
            memo(n) = ans
            ans
        }
        
        solve(n)
    }
}

```