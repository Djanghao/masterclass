# Kotlin Solution: Faster than 60%

**Author:** razoan
**Votes:** 1
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/1690091/](https://leetcode.com/problems/fair-candy-swap/solutions/1690091/)

---

```
class Solution {
    fun fairCandySwap(aliceSizes: IntArray, bobSizes: IntArray): IntArray {
        val aliceSum = aliceSizes.sum()
        val bobSum = bobSizes.sum()
        val target = (aliceSum - bobSum) / 2
        val aliceHash = aliceSizes.toHashSet()
        val bobHash = bobSizes.toHashSet()
        var x: Int = 0
        var y: Int = 0
        for (a in aliceHash) {
		// always calculating how many bob will get from alice
		// can be (+) or can be (-)
            if (bobHash.contains(a - target)){
                x=a;
                y=a-target
            }
        }
        return intArrayOf(x,y)
    }
}
```