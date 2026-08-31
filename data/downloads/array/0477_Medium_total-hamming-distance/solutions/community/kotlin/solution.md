# Kotlin Simple Solution

**Author:** geekiyer
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/1013635/](https://leetcode.com/problems/total-hamming-distance/solutions/1013635/)

---

```
class Solution {
    fun totalHammingDistance(nums: IntArray): Int {
        /**
        * 4  - 0 1 0 0
        * 14 - 1 1 1 0
        * 2  - 0 0 1 0
        * -------------
        * 1 bit count = 1 2 2 0
        * 0 bit count = 2 1 1 3 (nums.size - 1'bit count)
        *
        * Total Sum = (no. of 1bit * no. of 0bit) + .... (for all bits)
        **/
        var i = 0
        var total = 0
        while (i < 32) {
            var set_bit_count = 0
            for (n in nums) {
                var bit = n.and(1.shl(i))
                if (bit > 0) set_bit_count++
                
            }
            var unset_bit_count = nums.size - set_bit_count
            total += (unset_bit_count * set_bit_count)
            i++
        }
        return total
    }
}
```