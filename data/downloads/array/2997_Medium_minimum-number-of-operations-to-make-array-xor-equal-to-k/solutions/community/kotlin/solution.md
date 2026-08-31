# Kotlin 1-liner, beats 100%

**Author:** lifran
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4519815/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/4519815/)

---

# Intuition

The way the bitwise `XOR` over a list of numbers works, we have our goal laid out immediately:

For any bit `b` in `k`'s binary representation, if `b == 1`, we need an odd number of `x` in `nums` to have this bit set, and if `b == 0` we need an even number of `x` in `nums` to have this bit set.

This means that for any bit in our `XOR` that is "wrong", i.e. the bit is different between `XOR` and `k`, we need exactly 1 operation.

The number of different bits between any numbers `x` and `y` is the number of 1-bits in `z = x xor y`.

# Approach

We calculate the `XOR` over all `x` in `nums` and `k`, and return the number of 1-bits in `XOR`. 

# Complexity
- Time complexity:
O(`|nums|`), since we iterate over all of `nums` to calculate the `XOR`.

- Space complexity:
O(1), since no *additional* space is required. (O(`|nums|`) if problem parameters should be counted.)

# Kotlin
```
class Solution {
    fun minOperations(nums: IntArray, k: Int) =
        nums.fold(k, Int::xor).countOneBits()
}
```