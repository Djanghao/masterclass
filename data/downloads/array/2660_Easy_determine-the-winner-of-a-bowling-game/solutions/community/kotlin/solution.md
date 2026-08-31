# An Actually Simple Solution Using Kotlin

**Author:** V1Nut
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5091582/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5091582/)

---

# Code
```
class Solution {
    fun isWinner(player1: IntArray, player2: IntArray): Int {
        var p1 = 0
        var last1 = -3
        var p2 = 0
        var last2 = -3

        for (i in player1.indices){
            p1 += if (last1 + 2 >= i) player1[i] * 2 else player1[i]
            p2 += if (last2 + 2 >= i) player2[i] * 2 else player2[i] 

            if (player1[i] == 10) last1 = i
            if (player2[i] == 10) last2 = i
        }

        return when {
            p1 > p2 -> 1
            p1 < p2 -> 2
            else -> 0
        }
    }
}
```