# No math, just bit manipulation

**Author:** rrrrrr111
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/4645442/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/4645442/)

---

# Intuition
1. Take a zero as a starting number (`num`)
2. Start iterating initial array, take first element, set least significant bit of the `num` if element is `1`
3. Check result `num` for division on 5, save result, then shift its binary representation one bit to the left (`<<` in Java or `shl` in Kotlin)
4. Take next element from array, repeat same till the end
5. In Java or Kotlin if we use Integer for `num` it will eventually overflow for a long sequence of bits, so we can take a remainder after division `num` on 10 before every next step, as it doesn't impact 5-division property of the next number while preventing overflow


# Complexity $$O(n)$$, space $$O(1)$$ 
# Code
```
class Solution {
    fun prefixesDivBy5(nums: IntArray): List<Boolean> {
        val res = MutableList<Boolean>(nums.size) { false }
        var i = 0
        var num = 0
        while ( i < nums.size ) {
            if ( nums[i] == 1 )
                num = setBit(num, 0)            
            if (num %5 == 0)
                res[i] = true
            num = num shl 1
            num %= 10
            i++
        }
        return res
    }
}

/** Set certain bit to 1, 0-based starting from right-to-left */
fun setBit(num: Int, idx: Int): Int = (1 shl idx) or num
```