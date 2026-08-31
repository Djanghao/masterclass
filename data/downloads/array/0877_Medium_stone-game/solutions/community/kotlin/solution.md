# Easy to understand solution in pure kotlin

**Author:** BufferUnderflowException
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game/solutions/4823861/](https://leetcode.com/problems/stone-game/solutions/4823861/)

---



# Code
```
class Solution {
    fun stoneGame(piles: IntArray): Boolean {
    var a = 0
    var b = 0
    for(i in piles.indices) {
        if(i%2==0) {
            var f = piles.find { it>0 } ?: 0
            var l = piles.findLast { it>0 } ?: 0
            if (f>l) {
                a+=f
                piles[piles.indexOfFirst { it>0 }] = 0
            } else {
                a+=l
                piles[piles.indexOfLast { it>0 }] = 0
            }
        } else {
            var f = piles.find { it>0 } ?: 0
            var l = piles.findLast { it>0 } ?: 0
            if (f>l) {
                b+=l
                piles[piles.indexOfFirst { it>0 }] = 0
            } else {
                a+=f
                piles[piles.indexOfLast { it>0 }] = 0
            }
        }
    }
    return a>b
}
}
```