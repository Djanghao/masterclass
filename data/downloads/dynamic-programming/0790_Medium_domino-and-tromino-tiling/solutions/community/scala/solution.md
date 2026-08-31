# 100% Simple Short

**Author:** Kalz337
**Votes:** 0
**Link:** [https://leetcode.com/problems/domino-and-tromino-tiling/solutions/5363959/](https://leetcode.com/problems/domino-and-tromino-tiling/solutions/5363959/)

---


```
object Solution {

    def numTilings(n: Int): Int = n match
      case 0 => 0
      case 1 => 1
      case 2 => 2
      case 3 => 5
      case _ =>

        val mod = 1000000007  

        val dp = Array(0,1L,2L,5L) ++ Array.fill(999)(0L)

        (4 to n).foreach: i =>
        
            dp(i) = (2 * dp(i-1) + dp(i-3)) % mod

        dp(n).toInt
  
}
```