# Kotlin solution with counting sort

**Author:** mahmudxon
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4323311/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4323311/)

---

# Code
```
class Solution {
    fun maxCoins(piles: IntArray): Int {
        var max = 0
        val n = piles.size
        for (i in piles) {
            if (max < i) max = i
        }
        val freq = IntArray(max + 1)
        for (i in piles) {
            freq[i]++
        }
        var coins = 0
        var chance = n / 3
        var turn = 1
        var i = max
        while (chance != 0) {
            if (freq[i] > 0) {
                if (turn == 1) turn = 0 else {
                    chance--
                    turn = 1
                    coins += i
                }
                freq[i]--
            } else {
                i--
            }
        }
        return coins
    }
}
```