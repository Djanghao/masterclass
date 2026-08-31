# Kotlin, 2 ways. 1 liner and O(1) space w/ just bit shifts

**Author:** easchner
**Votes:** 9
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1361141/](https://leetcode.com/problems/build-array-from-permutation/solutions/1361141/)

---

The first way is the way I'd do it in real life. Simple one liner.

```
class Solution {
    fun buildArray(nums: IntArray) = IntArray(nums.size) { nums[nums[it]] }
}
```

The follow up asks to do it in O(1) space. Several of the other solutions are realizing you only need to worry about 10,000 items and are either doing multiply/divide/modulo or are doing bit masking. However we can just split the entire integer space (32 bits) into a `high` and a `low`. We'll keep the new values in the `high` space by shifting left 16 bits before adding. (Basically packing two shorts into each integer, with the first short being the new value and the second being the old.) If that item has already had it's stuff added to it, once you shift left 16 bits, the new value it was holding just overflows and falls off, so no need to divide or mask for it.

Then to get the new values back, just need to shift right 16 bits, and the old number just gets chopped off.

```
class Solution {
    fun buildArray(nums: IntArray): IntArray {
        for (i in nums.indices)
            nums[i] += nums[nums[i]] shl 16
        
        for (i in nums.indices)
            nums[i] = nums[i] ushr 16
        
        return nums
    }
}
```