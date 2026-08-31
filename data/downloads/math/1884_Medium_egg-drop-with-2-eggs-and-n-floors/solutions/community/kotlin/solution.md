# Explained in comments - Kotlin - Classic bottom up

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/1253762/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/1253762/)

---

```
    fun twoEggDrop(n: Int): Int {
        val k = 2
        val dp = Array(k + 1) { IntArray(n + 1) } // <eggs, floors>
        for (i in 1..k) // i eggs, 1 floor
            dp[i][1] = 1 // we only need 1 move
        for (j in 1..n) // 1 egg, j floors
            dp[1][j] = j // we need 'j' (or floor number) moves, play conservatively
			
        for (i in 2..k) { // eggs
            for (j in 2..n) { // floor
                var ans = Int.MAX_VALUE // need min moves in the end
                for (x in 1 until j) { // x is simulation floor, means try dropping it from bottom till top(j'th) floor
                    val eggBreaks = dp[i - 1][x - 1] // one less egg and move down
                    val eggNotBreak = dp[i][j - x] // same eggs, number of floors left is total(j) - simulation/droppped floor(x) = j - x
                    ans = minOf(ans, 1 + maxOf(eggBreaks, eggNotBreak)) // added one - this constitutes to one move
                }
                dp[i][j] = ans
            }
        }
        return dp[k][n]
    }
```