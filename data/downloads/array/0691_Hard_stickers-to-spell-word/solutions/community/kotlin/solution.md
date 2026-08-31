# Kotlin - dp bitmask

**Author:** gurumewell
**Votes:** 1
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/1920131/](https://leetcode.com/problems/stickers-to-spell-word/solutions/1920131/)

---

```
class Solution {
    /**
     * Can we use bitmask for the indices in target?
     *  target can have duplicate letters so it is not possible to use bitmask for letters but indices are unique
     *  now how do we update the index mask with a sticker knowing two or more indices in state bm may point to the same letter?
     *      we start with the endingMask. a sticker updates the bm by unsetting all indices it covers
     *  Time: O(2^T * N * L) - T is the length of target, N is number of stickers, L is the max length of a sticker.
     *  Storage: O(2^T)
     */
    private var dp = intArrayOf()
    private var bucket = Array(26) { mutableSetOf<Int>() }
    fun minStickers(stickers: Array<String>, target: String): Int {
        val T = target.length
        val endingMask = (1 shl T) - 1
        dp = IntArray(endingMask + 1) { -1 }
        for (i in 0 .. T-1) {
            val c = target[i]
            bucket[c-'a'].add(i)
        }
        val res = recurse(stickers, target, endingMask)
        return if (res >= Int.MAX_VALUE - 1) -1 else res
    }
    private fun recurse(stickers: Array<String>, target: String, mask: Int): Int {
        /**
         * min number of stickers required to meet mask
         */
        if (mask == 0) return 0
        if (dp[mask] != -1) return dp[mask]

        dp[mask] = Int.MAX_VALUE - 1
        for (s in stickers) {
            val newMask = unsetMask(s, mask, target)
            if (mask != newMask) {
                dp[mask] = dp[mask].coerceAtMost(1 + recurse(stickers, target, newMask))
            }
        }

        return dp[mask]!!
    }
    private fun unsetMask(s: String, mask: Int, target: String): Int {
        /**
         * unset mask with a sticker s.
         *  for each c in s, it maps to a set of indices in target. we use a precalc'd bucket for
         *      the indices c can cover. update res for each c, break if c has match so c can unset
         *      at most once. that handles dups in target.
         */
        var res = mask
        for (c in s) {
            val indices = bucket[c-'a']
            innerfor@for (i in indices) {
                if ((res and (1 shl i)) != 0) {
                    res = res xor (1 shl i)
                    break@innerfor
                }
            }
        }
        return res
    }
}