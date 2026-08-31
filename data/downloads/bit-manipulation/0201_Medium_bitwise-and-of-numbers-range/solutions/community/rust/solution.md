# Rust - beats 100%, 0 ms, O(1), optimal with explanation

**Author:** morfalcio_code
**Votes:** 7
**Link:** [https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/4761970/](https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/4761970/)

---

# Intuition
This is an explanation of a [solution](https://leetcode.com/problems/bitwise-and-of-numbers-range/discuss/2073976/compiles-to-five-instructions-on-x86-no-loops-no-branches/2266975/) by [soooch](https://leetcode.com/soooch). 

The key observation to make is that bitwise AND cancels out all different bits. So by iterating through a range, we would cancel all the bits that got updated during the iteration. So our task is to find the highest bits that remained the same from the start of the iteration (left) and until the end (right).

# Approach
1. Find the **different bits** by XORing left with right: The XOR operation (left ^ right) is used to identify bits that differ between left and right. If a bit is 1 in the XOR result, it means that the corresponding bits in left and right are different.

2. Determine the **first different bit** position: By calculating the number of leading zeros in the XOR result with `xor.leading_zeros()`, we find the first bit position where left and right differ. The total bit length (32 for an i32) minus the number of leading zeros gives the index of the first differing bit.

3. Shift **`left` to right** with `>>`: The algorithm then shifts left to the right by the number of bits determined in the previous step. By doing it we cancel out or "ignore" the differing bits, focusing on the common higher-order bits.

4. **Shift back** to the original position with `<<`: Finally, the result is shifted back to its original position by shifting it left by the same number of bits. This step ensures that the lower-order bits, which are set to 0 due to the AND operation, are correctly positioned.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn range_bitwise_and(left: i32, right: i32) -> i32 {
        let xor = left ^ right; // we find all bits that are different
        let first_different_idx = 32 - xor.leading_zeros(); // leading zeros mean that all previous bits are the same
        let left = left >> first_different_idx; // "cut" the different bits
        left << first_different_idx // restore back
    }
}
```

It helps to print out at each step:
```
0000000000000101  5 left
0000000000000111  7 right
0000000000000010  2 xor
0000000000100000 32 32
0000000000011110 30 xor.leading_zeros()
0000000000000010  2 first_different_idx
0000000000000001  1 left >> first_different_idx
0000000000000100  4 result
```