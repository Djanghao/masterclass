# [Kotlin] Bit Mask Without Map or Set

**Author:** catcatcute
**Votes:** 3
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/1624675/](https://leetcode.com/problems/rings-and-rods/solutions/1624675/)

---

```
class Solution {
    fun countPoints(rings: String): Int {
        val rods = IntArray(10)
        for (i in 0..rings.lastIndex step 2) {
            val position = rings[i + 1] - '0'
            rods[position] = rods[position] or rings[i].colorMask
        }
        val fullMask = 'R'.colorMask or 'G'.colorMask or 'B'.colorMask
        return rods.count { it == fullMask }
    }
    
    private val Char.colorMask
        get() = 
            when (this) {
                'R' -> 1
                'G' -> 1 shl 1
                'B' -> 1 shl 2
                else -> error("Not a valid color char $this")
            }
}
```