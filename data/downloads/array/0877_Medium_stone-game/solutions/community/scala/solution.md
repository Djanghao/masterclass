# Scala - memoisation

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game/solutions/5337062/](https://leetcode.com/problems/stone-game/solutions/5337062/)

---

Approach - 

1. Use recursion to get maximum score for alice. 
2. Since, both play optimally, if alice chose piles(i) then bob will difinetly select piles(i+1) max piles(j). 
3. So, in next chance alice can chose the maximum from remaining  numbers. Hence the minimum condition.
piles(i) + (solve(i+2,j) min solve(i+1, j-1) )


```
object Solution {
    def stoneGame(piles: Array[Int]): Boolean = {

        val n = piles.size
        val dp = Array.fill(n+1, n+1)(-1)
        def solve(i: Int, j: Int): Int = {
            if(i>j) return 0
            if( dp(i)(j) != -1 ) return dp(i)(j)

            val first = piles(i) + (solve(i+2,j) min solve(i+1, j-1) )
            val second = piles(j) + (solve(i+1,j-1) min solve(i,j-2))

            dp(i)(j) =  first max second
            dp(i)(j)
        }
        
        val alice = solve(0,n-1) 
        val bob = piles.sum - alice

        alice > bob
    }
}
```