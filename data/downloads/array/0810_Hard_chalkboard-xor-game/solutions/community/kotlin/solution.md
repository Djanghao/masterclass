# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/4625611/](https://leetcode.com/problems/chalkboard-xor-game/solutions/4625611/)

---

# Code
```
class Solution {
    fun xorGame(nums: IntArray): Boolean = nums.reduce(Int::xor).let { it==0 || nums.size%2==0 }
}
```