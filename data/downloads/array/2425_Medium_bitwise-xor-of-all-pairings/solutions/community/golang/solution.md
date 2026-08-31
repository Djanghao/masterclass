# Bitwise XOR of All Pairings - GO

**Author:** rossird
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/4939870/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/4939870/)

---

# Intuition
XOR properties:
1. a ^ 0 = a
1. a ^ a = 0
1. a ^ (b ^ c) = (a ^ b) ^ c

Using property 1, we only care how many pairs each number appears in. The number of pairs each number appears in depends on the length of the other array. If the number of pairs is even, then the number will be XOR'd an even number of times, so we can omit those calculations entirely.

# Approach
If the length of nums1 is odd, then xor each number in num2 in to the accumulator. Apply same logic to xor each number in nums1.

# Complexity
- Time complexity:
O(n + m)

- Space complexity:
O(1)

# Code
```
func xorAllNums(nums1 []int, nums2 []int) int {
    acc := 0
    if len(nums1) % 2 == 1 {
        for _, v := range nums2 {
            acc ^= v
        }
    } 
    if len(nums2) % 2 == 1 {
        for _, v := range nums1 {
            acc ^= v
        }
    }

    return acc
}
```