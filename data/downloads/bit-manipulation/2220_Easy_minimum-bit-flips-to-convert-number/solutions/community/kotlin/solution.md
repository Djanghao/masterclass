# Kotlin simple solution || Detailed explanation

**Author:** sushanth_grandhi
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5768625/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5768625/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In order to count the number of bit flips required to convert start to goal. We need to find the bit positions which differ in both the numbers.

So, we can go bit by bit to check if it varies or same.

If the bits in both the numbers vary, we need to flip it and hence needed to be counted.

# Approach
<!-- Describe your approach to solving the problem. -->

We can use "X-or" bitwise operator. Since xor of 2 numbers result in a number which has set bits (1) in positions that vary in both the numbers.

Once we found the xor result, we can use right shift operator to traverse bit by bit and count the set bits.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. Finding xor is linear - in terms of number of bits.
2. Finding bit count is linear - in terms of number of bits.
3. Given that numbers are in range of [0, 10^9].
4. A number 2^x can be represented in 'x+1' bits => 4 - 3 bits, 8 - 4 bits, 16 - 5 bits, ...etc
5. 1000 = 10^3 ~ 1024 = 2^10 => 10^9 ~ 2^30 => At max 31 bits.
6. Hence, it takes O(31) ~ constant time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1. No extra space is required ~ O(1).

# Code
```kotlin []
class Solution {
    fun minBitFlips(start: Int, goal: Int): Int {
        // 1 xor 1 = 0; 0 xor 1 = 1
        // Hence, xor of 2 numbers will result in number with 1 in bits that differ

        var xorVal = start xor goal
        var bitFlips = 0

        // Starting with LSB, 
        // check if there is 1 at each bit and count accordingly
        while (xorVal > 0) {
            // bitFlips += if (xorVal and 1 == 1) 1 else 0

            bitFlips += (xorVal and 1)
            // or if (xorVal and 1 == 1) bitFlips++

            xorVal = xorVal shr 1
        }

        return bitFlips
    }
}
```

```python3 []
class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:

        // 1 ^ 1 = 0; 0 ^ 1 = 1
        // Hence, xor of 2 numbers will result in number with 1 in bits that differ

        xorVal = start ^ goal
        bitFlips = 0

        // Starting with LSB, 
        // check if there is 1 at each bit and count accordingly
        while xorVal:
            bitFlips += 1 if (xorVal & 1) else 0
            xorVal >>= 1
        
        return bitFlips
        
```

Please upvote if you like my solution :)
Leave a comment for any suggestions