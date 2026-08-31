# :: Kotlin :: Bitset DP

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5454346/](https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5454346/)

---

# Code
```
class Solution {
    fun maxTotalReward(rewardValues: IntArray): Int {
        Arrays.sort(rewardValues)
        val n = rewardValues.size
        val max = rewardValues[n - 1]
        var result = max

        val bitset = BooleanArray( 2 * max + 1 )
        bitset[0] = true

        var prev = 0
        for (v in rewardValues) {
            if (v == prev) continue
            prev = v
            for (i in 0 until v) {
                if (bitset[i] == true) {
                    bitset[i + v] = bitset[i]
                    result = maxOf(result, i + v)
                }
            }
        }

        return result
    }
}
```