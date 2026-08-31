# DP || bit masking || Koltin

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/6138972/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/6138972/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    val MOD = 1000000007
    fun numberWays(hats: List<List<Int>>): Int {
        val mask = (1 shl hats.size) - 1
        val dp = Array(mask + 1){
            Array<Int?>(42){null}
        }
        return enumerate(hats, mask, 1, dp)
    }

    fun enumerate(hats: List<List<Int>>, mask: Int, hatIndex: Int, dp: Array<Array<Int?>>): Int {
        // if all persion weared hats return 1
        if (mask == 0) return 1
        if(hatIndex > 40) return 0
        if(dp[mask][hatIndex] != null) return dp[mask][hatIndex]!!
        // for ith persion
        // count for all possible hats he can wear
        var result = 0
        for (person in 0..hats.lastIndex) {
            // is this persion alreay weared a cap
            if ((1 shl person) and mask != 0) {
                // is this cap allowed to wear for this persion
                if (hats[person].contains(hatIndex)){
                    result = (result + enumerate(hats, (1 shl person).inv() and mask, hatIndex + 1, dp)) %MOD
                }
            }
        }
        result = (result + enumerate(hats, mask, hatIndex + 1, dp))%MOD
        dp[mask][hatIndex] = result
        return dp[mask][hatIndex]!!
    }
}
```